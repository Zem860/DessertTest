import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sweet from './pages/Sweet';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Cart from './pages/Cart';
import './index.css'
import './styles/style.css'

function App() {
  return (
    <Router>
    <div className="App">
    <Navigation />
      <Routes >
        <Route  path="/" element={<Home />}/>
        <Route  path="/sweet" element={<Sweet/>}/>
        <Route  path="/login" element={<Login/>}/>
        {/* <Route  path="/ramen/:id" element={<RamenDetails/>}/> */}
        <Route  path="/cart" element={<Cart/>}/>

        <Route  path="*" element={<NotFound/>}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
