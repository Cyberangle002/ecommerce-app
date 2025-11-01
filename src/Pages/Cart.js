import React, { useContext } from 'react';
import { CartContext } from "../Context/CartContext";  // ✅ fixed import
import { motion } from 'framer-motion';
import './Cart.css';
export default function Cart() {
  const { cart, removeFromCart, updateQty, total, clearCart } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="mt-3">Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map(item => (
              <motion.div 
                key={item.id} 
                className="card mb-3 p-3" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="d-flex align-items-center">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: 90, height: 90, objectFit: 'contain' }} 
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6>{item.title}</h6>
                    <p className="mb-1">₹{item.price}</p>
                    <div className="d-flex align-items-center">
                      <input 
                        type="number" 
                        min="1" 
                        value={item.qty} 
                        onChange={(e) => updateQty(item.id, Number(e.target.value))} 
                        style={{ width: 70 }} 
                      />
                      <button 
                        className="btn btn-sm btn-danger ms-3" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Order Summary</h5>
              <p className="mb-1">Items: {cart.length}</p>
              <h4>₹{total}</h4>
              <button 
                className="btn btn-success w-100 mt-3" 
                onClick={() => alert('Checkout stub — integrate payment later')}
              >
                Checkout
              </button>
              <button 
                className="btn btn-outline-secondary w-100 mt-2" 
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
