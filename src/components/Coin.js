import React from 'react';
import results from './Convert';

function Coin({ name, icon, price, symbol }) {
  price = results 
  return (
    
    <div className='coin'>
        <h1>Nom du Crypto: {name} </h1>
        <img src={icon} alt={name}/>
        <h3>Prix: {price.toFixed(3)}Dhs </h3>
        <h3>Symbole: {symbol} </h3>
    </div>
  )
}

export default Coin;