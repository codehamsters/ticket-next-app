import Link from "next/link";
import React from "react";
import "../../globals.css";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="utility-box">
        <Link href="/">
          <i className="fa-solid fa-house icon"></i>
        </Link>
        <Link href="/ticket/new">
          <i className="fa-solid fa-ticket icon"></i>
        </Link>
      </div>
      <Link href="/auth">
        <div className="account">
          <i className="fa-solid fa-circle-user"></i>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
