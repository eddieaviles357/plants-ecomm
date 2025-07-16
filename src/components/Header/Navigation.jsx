import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="flex w-full h-20 px-4 py-2 bg-gray-800 text-white ">
      <div>
        <NavLink to="/" style={{ margin: 10 }}>Home</NavLink>
        <NavLink to="/products" style={{ margin: 10 }}>Products</NavLink>
        <NavLink to="/login" style={{ margin: 10 }}>Login</NavLink>
        <NavLink to="/signup" style={{ margin: 10 }}>Signup</NavLink>
        <NavLink to="/about" style={{ margin: 10 }}>about</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;