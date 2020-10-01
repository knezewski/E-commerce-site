import React, {useContext, useState} from 'react';
import CartItem from '../components/CartItem';

import {Context} from "../Context";

export default function Cart() {

   const {cartItems, emptyCart} = useContext(Context);
   const [text, setText] = useState("Place Order")

   const totalCost = 5.99 * cartItems.length;
   const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

   const cartItemElements = cartItems.map(item => (
      <CartItem key={item.id} item={item} />
   ))

   function placeOder() {
      setText("Ordering...")
      setTimeout(() => {
      setText("Order placed!")
      emptyCart()
      },3000)
   }

   return (
      <main className="cart-page">
         <h1>Check out</h1>
         {cartItemElements}
         <p className="total-cost">Total:{totalCostDisplay} </p>
         {
            cartItems.length > 0 ?
            <div className="order-button">
               <button onClick={placeOder}>{text}</button>
            </div> :
            <p>You have no items in your cart</p>
         }
      </main>
   )
};