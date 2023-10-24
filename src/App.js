
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/footer/footer';
import mens_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import  kids_banner from './Components/Assets/banner_kids.png'


function App() {//Routes defining
  return (
    <div className="App " >
      <BrowserRouter> 

      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens'element={<ShopCategory banner={mens_banner}category="mens" />}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>

          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>

           <Route path='/product' element={<Product/>} >

                <Route path=':productId'element={<Product/>}>

                </Route>
        </Route>

        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignUp/>}></Route>
        


      </Routes>

      <Footer/>

      </BrowserRouter>
     

    </div>
  );
}

export default App;
