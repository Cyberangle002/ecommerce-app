import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <motion.footer 
      className="footer text-center py-4 text-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>© 2025 CyberAngle Store | Built by Aditi Pandit 💻</p>
    </motion.footer>
  );
}
