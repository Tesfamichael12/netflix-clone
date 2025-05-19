import React, { useEffect, useState } from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import netflixLogo from "../../assets/images/Netflix_2015_logo.svg";
import netflixAvatar from "../../assets/images/Netflix-avatar.png";

function Header() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header className={`header${show ? " header--scrolled" : ""}`}>
      <div className="header__content">
        <div className="header__left">
          <button
            className="header__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon className="header__icon" />
          </button>
          <img className="header__logo" src={netflixLogo} alt="Netflix Logo" />
        </div>
        <nav className={`header__nav${menuOpen ? " header__nav--open" : ""}`}>
          {menuOpen && (
            <button
              className="header__close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon className="header__icon" />
            </button>
          )}
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
        </nav>
        <div className="header__right">
          <SearchIcon className="header__icon" />
          <NotificationsIcon className="header__icon" />
          <img
            className="header__avatar"
            src={netflixAvatar}
            alt="User Avatar"
          />
        </div>
      </div>
      {menuOpen && (
        <div
          className="header__backdrop"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;
