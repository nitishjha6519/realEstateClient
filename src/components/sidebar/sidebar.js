import React, { useState, useEffect } from "react";
import "./styles.css";
import { House, Bell, DownloadSimple, UploadSimple, Eye } from "phosphor-react";

function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 866px)");
    const handleMediaQueryChange = (event) => {
      setIsMenuOpen(event.matches);
    };
    //event
    handleMediaQueryChange(mediaQuery);
    // state update
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <div onClick={toggleMenu} className="menu-button">
        <svg className="hamburger-icon">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </div>

      {isMenuOpen && (
        <div className="side-bar menu">
          <p className="logo">LOGO</p>
          <ul>
            <li>
              <House className="icon" size={13} />
              Menu item 1
            </li>
            <li>
              <Bell className="icon" size={13} />
              Menu item 2
            </li>
            <li>
              <DownloadSimple className="icon" size={13} />
              Menu item 3
            </li>
            <li>
              <UploadSimple className="icon" size={13} />
              Menu item 3
            </li>
            <li>
              <Eye className="icon" size={13} />
              Menu item 3
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default SideBar;
