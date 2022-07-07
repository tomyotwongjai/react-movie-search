import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import {MovieDetail, PageNotFound, Footer, Header, Home} from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
