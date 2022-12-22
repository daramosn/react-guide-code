import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './store/cart-context';


function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const cartToggleHandler = () => {
    setDisplayCart(prevDisplayCart => !prevDisplayCart);
  };

  return (
    <CartProvider>
      {displayCart && <Cart onCloseModal={cartToggleHandler} />}
      <Header onOpenModal={cartToggleHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
