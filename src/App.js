import React, { useState, useEffect } from 'react'
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import { commerce } from './lib/commerce';

function App() {
    const [ products, setProducts ] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProduct = async () => {
        const { data } = await commerce.products.list();
       
        setProducts(data);
    }

    const fetchCart = async () => {
        const itemz = await commerce.cart.retrieve();

        setCart(itemz)
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart)
    }

    useEffect(() => {

        fetchProduct();
        fetchCart();

    }, []);

console.log(cart)

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            {/* <Products onAddToCart={handleAddToCart} products={products} /> */}
            <Cart cart={cart} />
        </div>
    )
}

export default App
