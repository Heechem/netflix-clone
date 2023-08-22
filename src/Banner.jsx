import React from 'react';
import './Banner.css';

function Banner() {
  function truncate(stri, n) {
    return stri?.length > n ? stri.substr(0, n - 1) + '...' : stri;
  }
  return (
    <header
      className="banner"
      style={{
        // width: '100vw',
        backgroundSize: 'cover',
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {truncate(`This is a test description`, 150)}
        </h1>
      </div>
      <div className="banner--faderBottom" />
    </header>
  );
}

export default Banner;
