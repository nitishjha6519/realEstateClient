import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const userid = window.localStorage.getItem("userid");
  const email = window.localStorage.getItem("email").split("@")[0];
  // console.log(email, userid);

  // const [toggle,setToggle]=useState(false)

  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <div className="header-class">
      <div className="header-left">
        {userid} : {email}
      </div>
      <div className="header-right" onClick={logout}>
        Log Out
      </div>
    </div>
  );
}

export default Header;
