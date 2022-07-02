import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import {MovieDetail, PageNotFound, Footer, Header, Home} from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
