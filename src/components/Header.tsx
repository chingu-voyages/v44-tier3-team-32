import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [womenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [menDropdownOpen, setMenDropdownOpen] = useState(false);

  const toggleWomenDropdown = () => {
    setWomenDropdownOpen(!womenDropdownOpen);
  };

  const toggleMenDropdown = () => {
    setMenDropdownOpen(!menDropdownOpen);
  };



  return (
    <header>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#" className="menu-link" onClick={toggleWomenDropdown}>
              Women
            </a>
            {womenDropdownOpen && (
              <ul className="dropdown">
                <li className="dropdown-item">Shirts</li>
                <li className="dropdown-item">Pants</li>
                <li className="dropdown-item">Jackets</li>
                <li className="dropdown-item">Hats</li>
                <li className="dropdown-item">Shoes</li>
              </ul>
            )}
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link" onClick={toggleMenDropdown}>
              Men
            </a>
            {menDropdownOpen && (
              <ul className="dropdown">
                <li className="dropdown-item">Shirts</li>
                <li className="dropdown-item">Pants</li>
                <li className="dropdown-item">Jackets</li>
                <li className="dropdown-item">Hats</li>
                <li className="dropdown-item">Shoes</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <h2 className="logo">The Store</h2>
      <div className="iconContainer">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-user"></i>
      </div>

    </header>
  );
}
