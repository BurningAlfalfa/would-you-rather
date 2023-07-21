// MainLayout.js
import React from 'react';
import { Link } from "react-router-dom";


const Navbar = ({ children, user}) => {
  return (
    <nav
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      // height: 20,
      // margin:0,
      // padding:0
    }}
    className="navbar"
  >
    <ul style={{display: "flex"}}>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <ul>
        <Link to="/new-poll">New Poll</Link>
      </ul>
      <ul>
        <Link to="/leaderboard">Leaderboard</Link>
      </ul>
    </ul>
    <div style={{display:"flex"}}className="user-info">
      <img style={{width:40,
      height:40}} src={user.avatarURL} alt="User Avatar" />
      {user && <span>{<ul key={user.id}>{user.name}</ul>}</span>}
      <button>Logout</button>
    </div>
  </nav>
     
  );
};

export default Navbar;
