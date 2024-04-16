import React from 'react'


const Cart = ({cartItems}) => {
  return (
    <div>
      <h1 style={{color:'white'}}>Your cart is ready!</h1>
      <ul>
        { cartItems.length > 0 ? (
        cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))
      ):(
        <p>Your cart is empty!</p>
      )}
      </ul>
    </div>
  )
}

export default Cart
