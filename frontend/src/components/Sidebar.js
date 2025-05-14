import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';

export default function Sidebar({ isOpen }) {
  const [open, setOpen] = useState({
    codeBeheer: false,
    certificaten: false,
    bedrijf: false,
    financiele: false,
    productgroep: false,
  });
  const toggle = key => setOpen(o => ({ ...o, [key]: !o[key] }));

  return (
    <nav className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <ul className="menu">
        <li className="menu-item">
            
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
            
            isActive
                ? 'submenu-link active'
                : 'submenu-link'
            }
        >
            Home
        </NavLink>
          
        </li>

        <li className="menu-item">
          <div
            className={`dropdown-header ${open.codeBeheer ? 'open' : ''}`}
            onClick={() => toggle('codeBeheer')}
          >
            CodeBeheer
            {open.codeBeheer ? <FaChevronDown/> : <FaChevronRight/>}
          </div>
          <AnimatePresence initial={false}>
            {open.codeBeheer && (
              <motion.ul
                className="dropdown-list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Certificaten */}
                <li className="submenu-item">
                  <div
                    className={`dropdown-header ${open.certificaten ? 'open' : ''}`}
                    onClick={() => toggle('certificaten')}
                  >
                    Certificaten
                    {open.certificaten ? <FaChevronDown/> : <FaChevronRight/>}
                  </div>
                  <AnimatePresence initial={false}>
                    {open.certificaten && (
                      <motion.ul
                        className="dropdown-list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <li className="submenu-item">
                          <NavLink to="/gpc-automatisering" className={({ isActive }) => isActive ? 'active submenu-link' : 'submenu-link'}>
                            GPC Automatisering
                          </NavLink>
                          <NavLink to="/biocertificaat" className={({ isActive }) => isActive ? 'active submenu-link' : 'submenu-link'}>
                            Bio Certificaten
                          </NavLink>
                        </li>
                        
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
     

                {/* Bedrijf en Locaties */}
                <li className="submenu-item">
                  <div
                    className={`dropdown-header ${open.bedrijf ? 'open' : ''}`}
                    onClick={() => toggle('bedrijf')}
                  >
                    Bedrijf en Locaties
                    {open.bedrijf ? <FaChevronDown/> : <FaChevronRight/>}
                  </div>
                  <AnimatePresence initial={false}>
                    {open.bedrijf && (
                      <motion.ul
                        className="dropdown-list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <li className="submenu-item">
                          <NavLink to="/royal-flora-holland" className={({ isActive }) => isActive ? 'active submenu-link' : 'submenu-link'}>
                            RoyalFloraHolland
                          </NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

        {/* Financiële administratie */}
        <li className="menu-item">
          <div
            className={`dropdown-header ${open.financiele ? 'open' : ''}`}
            onClick={() => toggle('financiele')}
          >
            Financiële administratie
            {open.financiele ? <FaChevronDown/> : <FaChevronRight/>}
          </div>
          <AnimatePresence initial={false}>
            {open.financiele && (
              <motion.ul
                className="dropdown-list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <li className="submenu-item">
                  <NavLink to="/wendela" className={({ isActive }) => isActive ? 'active submenu-link' : 'submenu-link'}>
                    Wendela
                  </NavLink>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

        {/* Productgroep */}
        <li className="menu-item">
          <div
            className={`dropdown-header ${open.productgroep ? 'open' : ''}`}
            onClick={() => toggle('productgroep')}
          >
            Productgroep
            {open.productgroep ? <FaChevronDown/> : <FaChevronRight/>}
          </div>
          <AnimatePresence initial={false}>
            {open.productgroep && (
              <motion.ul
                className="dropdown-list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <li className="submenu-item">
                  <NavLink to="/connie" className={({ isActive }) => isActive ? 'active submenu-link' : 'submenu-link'}>
                    Connie
                  </NavLink>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </nav>
  );
}
