import React, { useState, useEffect } from 'react'
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProduct = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart)
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
         
    }
    const handleRemoveCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);

    }

    useEffect(() => {

        fetchProduct();
        fetchCart();

    }, []);



    return (
        <Router>
           
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products onAddToCart={handleAddToCart} products={products} />

                    </Route>

                    <Route exact path="/cart">
                        <Cart cart={cart}
                        handleEmptyCart={handleEmptyCart}
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleRemoveCart={handleRemoveCart} />
                    </Route>
                
                </Switch>
            
        </Router>

    )
}

export default App;
