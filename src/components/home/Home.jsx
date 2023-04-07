import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../cart/Cart';
import './Home.css';
const Home = () => {
    const TShirts = useLoaderData();
    const [cart, setCart]=useState([]);

    const handleAddToCart = tshirt =>{
        // console.log(tshirt);
        const newCart= [...cart, tshirt];
        setCart(newCart);
    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
            {
                TShirts.map(tshirt =><TShirt key={tshirt._id} handleAddToCart={handleAddToCart}  tshirt={tshirt}></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;