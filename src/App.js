import React, { useState, useEffect } from 'react'
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Components/CheckoutForm/Checkout/Checkout';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

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

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
  
            setOrder(incomingOrder);
            refreshCart();

        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
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

                    <Route exact path="/checkout">
                        <Checkout 
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage} />
                    </Route>
                
                </Switch>
            
        </Router>

    )
}

export default App;
