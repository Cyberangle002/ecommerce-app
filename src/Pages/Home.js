import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div className="home-page">

      {/* 🌅 HERO SECTION */}
      <motion.section
        className="hero-section text-center text-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay">
          <div className="container hero-content">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="fw-bold display-5"
            >
              Welcome to <span>CyberAngle Store</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="lead"
            >
              Discover top gadgets, trendy fashion, and accessories at the best prices!
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            >
              <Link to="/products" className="btn btn-primary btn-lg mt-3 px-4">
                🛒 Shop Now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 💠 FEATURED CATEGORIES */}
      <section className="categories-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Shop by Category</h2>
          <div className="row">
            {[
              { name: "Electronics", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
              { name: "Fashion", img: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=600" },
              { name: "Accessories", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600" },
              { name: "Home Decor", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600" }
            ].map((cat, index) => (
              <motion.div
                className="col-md-3 mb-4"
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="category-card shadow-lg rounded">
                  <img src={cat.img} alt={cat.name} className="category-img" />
                  <div className="category-info">
                    <h5>{cat.name}</h5>
                    <Link to="/products" className="btn btn-outline-light mt-2">
                      Explore
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✨ FEATURE HIGHLIGHTS */}
      <section className="features py-5 text-center text-light">
        <div className="container">
          <div className="row">
            {[
              { icon: "🚚", title: "Fast Delivery", desc: "Get your orders delivered in 2 days." },
              { icon: "💳", title: "Secure Payment", desc: "We offer 100% secure payment options." },
              { icon: "🎧", title: "24/7 Support", desc: "Our team is available anytime for you." },
              { icon: "💰", title: "Best Prices", desc: "Unbeatable deals and seasonal discounts!" }
            ].map((f, i) => (
              <motion.div
                key={i}
                className="col-md-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="feature-card p-4 rounded shadow">
                  <h1>{f.icon}</h1>
                  <h5 className="mt-3">{f.title}</h5>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
