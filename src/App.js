import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CartDisplay from "./Components/Cart/CartDisplay.jsx"
import { CartProvider } from './Context/CartContext';
import Footer from './Components/Footer/Footer';
import Main from "./Components/Main/Main"


function App() {

  return (
    <CartProvider> 
      <main> 
        <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/items" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartDisplay/>}/>
        </Routes>

        <Footer/>
  
        </BrowserRouter>
      </main>
    </CartProvider>
  );
}

export default App;
