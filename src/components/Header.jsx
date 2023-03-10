import React from "react";

function Header() {
  return (
    <header className="header">
      <div>
        <img
          src="./troll_face.png"
          alt="Troll Face image"
          className="header-img"
        />
        <h1 className="header-title">Meme Generator</h1>
      </div>
      <p className="header-text">React Course - Project 3</p>
    </header>
  );
}

export default Header;
