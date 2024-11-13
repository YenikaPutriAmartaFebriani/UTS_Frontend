import React from 'react';
import '../App.css';
import gambar1 from '../aset/u1.jpg';
import gambar2 from '../aset/u2.jpg';

function Ulasan() {
  const reviews = [
    {
      image: gambar1
    },
    {
      image: gambar2
    },
  ];

  return (
    <section id="testi" className="ulasan-section">
      <h2>Ulasan Pelanggan</h2>
      <div className="ulasan-list">
        {reviews.map((item, index) => (
          <div className="ulasan-item" key={index}>
            <img src={item.image} alt={item.name} className="ulasan-image" />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ulasan;