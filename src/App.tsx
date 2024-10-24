import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sweet from './pages/Sweet';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import SuccessPayment from './pages/SuccessPayment';
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
        <Route  path="/checkout" element={<Checkout/>}/>

        {/* <Route  path="/ramen/:id" element={<RamenDetails/>}/> */}
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="/payment" element={<Payment/>}/>
        <Route  path="/success" element={<SuccessPayment/>}/>
        <Route  path="*" element={<NotFound/>}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
