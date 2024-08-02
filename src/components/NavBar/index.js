import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="DNC Logo" />
        <NavLink exact to="/" activeClassName="active" className="logoLink">
          Food
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/variedades" activeClassName="active">
            Variedades
          </NavLink>
        </li>
        <li>
          <NavLink to="/lanches" activeClassName="active">
            Lanches{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/pizzas" activeClassName="active">
            Pizzas
          </NavLink>
        </li>
        <li>
          <NavLink to="/doces" activeClassName="active">
            Doces
          </NavLink>
        </li>
        <li>
          <NavLink to="/promo" activeClassName="active">
            Promoções
          </NavLink>
        </li>
        <li className="nav-item-right">
          <NavLink to="/carrinho" activeClassName="active">
            Minhas compras
          </NavLink>
          <img
            src="/images/carrinho.png"
            alt="DNC Logo"
            className="cart-icon"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
