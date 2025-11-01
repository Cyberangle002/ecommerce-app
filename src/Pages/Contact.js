import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <div className="container py-5">
      <motion.h2 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h2>

      <motion.form 
        className="contact-form mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message..." rows="5"></textarea>
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </motion.form>
    </div>
  );
}
