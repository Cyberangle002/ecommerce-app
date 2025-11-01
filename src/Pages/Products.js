import React from 'react';
import { motion } from 'framer-motion';
import './Products.css';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, title: 'Smartphone', price: 29999, img: 'https://via.placeholder.com/200' },
  { id: 2, title: 'Headphones', price: 4999, img: 'https://via.placeholder.com/200' },
  { id: 3, title: 'Watch', price: 8999, img: 'https://via.placeholder.com/200' },
  { id: 4, title: 'Shoes', price: 3999, img: 'https://via.placeholder.com/200' },
];

export default function Products() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map(p => (
          <motion.div
            key={p.id}
            className="col-md-3 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="card product-card text-center p-3">
              <img src={p.img} alt={p.title} className="card-img-top rounded" />
              <h6 className="mt-3">{p.title}</h6>
              <p>₹{p.price}</p>
              <Link to={`/product/${p.id}`} className="btn btn-outline-primary">View Details</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
