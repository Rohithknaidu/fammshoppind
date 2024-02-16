import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'; 
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSignup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/p3.png'
import women_banner from './Components/Assets/p1.png'
import kid_banner from './Components/Assets/p10.png'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/men" element={<ShopCategory   category="men"/>}/>
        <Route path="/women" element={<ShopCategory category="women"/>}/>
        <Route path="/kids" element={<ShopCategory   category="kids"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSingup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
