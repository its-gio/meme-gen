import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__image-container">
        <img
          className="header__image-container--image"
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Problem?"
        />
      </div>
      <h1 className="header__tagline">Meme Generator</h1>
    </header>
  );
}

export default Header;
