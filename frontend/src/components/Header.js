// src/components/Header.js
import React from 'react';

import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header({ isOpen, onBurgerClick }) {
  return (
    <header className="header">

      <motion.button
        className="burger"
        onClick={onBurgerClick}
        animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.1 : 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
      >
        <FaBars />
      </motion.button>

      <img src="/logo.png" alt="Floricode" className="header-logo" />
      <h1>Floricode Dashboard</h1>
    </header>
  );
}
