import React from "react";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"
      />
      <p className="header__tagline">Meme Generator</p>
    </header>
  );
}

export default Header;
