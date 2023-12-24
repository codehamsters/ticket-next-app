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
        <Link href="/TicketPage/new">
          <i className="fa-solid fa-ticket icon"></i>
        </Link>
      </div>
      <div className="account">
        <i className="fa-solid fa-circle-user"></i>
      </div>
    </nav>
  );
};

export default NavBar;
