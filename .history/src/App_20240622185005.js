
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Footer from './Components/'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Shop/>}/>
        <Route path = '/mens' element={<ShopCategory category="men"/>}/>
        <Route path = '/womens' element={<ShopCategory category="women"/>}/>
        <Route path = '/kids' element={<ShopCategory category="kids"/>}/>
        <Route path= '/product' element={<Product/>}/>
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
