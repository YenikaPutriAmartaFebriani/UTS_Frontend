import React from 'react';
import '../App.css';
import logo from '../aset/logo.jpeg';

function Header() {
  return (
    <header className='header'>
      <div className='header-logo'>
        <img src={logo} alt="Logo" className="logo-image" />
        <h1>UMKM Jasa Interior Kicenset Eksterior Banyuwangi</h1>
      </div>
      <nav>
        <button>
          <a href='#home'>Home</a>
        </button>
        <button>
          <a href='#service'>Services</a>
        </button>
        <button>
          <a href='#about'>About</a>
        </button>
      </nav>
    </header>
  );
}

export default Header;