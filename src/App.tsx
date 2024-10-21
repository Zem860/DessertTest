import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import './index.css'
import './styles/style.css'

function App() {
  return (
    <Router>
    <div className="App">
    <Navigation />
      <Routes >
        <Route  path="/" element={<Home />}/>
        <Route  path="/about" element={<About/>}/>
        {/* <Route  path="/ramen/:id" element={<RamenDetails/>}/> */}
        <Route  path="*" element={<NotFound/>}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
