import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Sample product data (you can replace this with API data later)
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 1999,
      img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg",
      desc: "Experience immersive sound quality with noise cancellation and long battery life.",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 2999,
      img: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SL1500_.jpg",
      desc: "Track your health and fitness goals with real-time monitoring and sleek design.",
      category: "Electronics",
    },
    {
      id: 3,
      title: "Sneakers",
      price: 2499,
      img: "https://m.media-amazon.com/images/I/71sNVmE+pxL._UL1500_.jpg",
      desc: "Trendy and comfortable sneakers designed for style and performance.",
      category: "Fashion",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <div className="container text-center py-5">
        <h2>Product Not Found 😢</h2>
      </div>
    );

  return (
    <div className="container py-5 product-details-page">
      <motion.div
        className="row align-items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Product Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <motion.img
            src={product.img}
            alt={product.title}
            className="img-fluid detail-img shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <motion.h2
            className="mb-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {product.title}
          </motion.h2>

          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {product.desc}
          </motion.p>

          <motion.h3
            className="price my-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ₹{product.price}
          </motion.h3>

          <div className="d-flex gap-3">
            <motion.button
              className="btn btn-primary px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product)}
            >
              Add to Cart 🛒
            </motion.button>

            <motion.button
              className="btn btn-outline-dark px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert('Proceeding to Buy Now...')}
            >
              Buy Now ⚡
            </motion.button>
          </div>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h6 className="mt-4">Category: <span className="badge bg-secondary">{product.category}</span></h6>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
