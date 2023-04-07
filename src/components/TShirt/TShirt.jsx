import React from 'react';
import "./TShirt.css"

const TShirt = ({tshirt,handleAddToCart}) => {
    const {picture, name, _id, gender,price} =tshirt;
    // console.log(tshirt);
    return (
        <div className='Tshirt-container'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: ${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>BUY NOW</button>
        </div>
    );
};

export default TShirt;