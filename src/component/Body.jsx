import React from 'react';
import '../App.css';
import gambar from '../aset/ts1.jpeg';
import produkA from '../aset/ts2.jpeg';
import produkB from '../aset/ts3.jpeg';
import produkC from '../aset/ts4.jpeg';
import produkD from '../aset/ts5.jpeg';
import produkE from '../aset/ts6.jpeg';
import produkF from '../aset/ts7.jpeg';

function Body() {
  const services = [
    { title: 'Testi Produk', description: 'Pemasangan interior pelanggan untuk kantor', image: produkA },
    { title: 'Testi Produk', description: 'Pemasangan interior pelangan untuk ruang tamu', image: produkB },
    { title: 'Produksi', description: 'Pesanan meja untuk pelanggan', image: produkC },
    { title: 'Produksi', description: 'Produk pintu yang sudah jadi', image: produkD },
    { title: 'Produksi', description: 'Proses produksi pintu', image: produkE },
    { title: 'Proyek', description: 'Hasil proyek pembangunan di kantor Kecamatan Banyuwangi', image: produkF }
  ];

  return (
    <main>
      <section id='home' className="description-section">
        <h2>Deskripsi</h2>
        <p>Kami menyediakan jasa interior, kitchencet, eksterior untuk berbagai bangunan seperti kantor, sekolah, masjid, rumah dan dapur. Dengan harga terjangkau bangunan, rumah, dan dapur anda akan menjadi lebih mewah dan aestetik.</p>
        <img 
          src={gambar}
          alt="Gambar UMKM"
          className="body-image"
        />
      </section><br/>

      <section>
        <h2>Fitur & Testimoni</h2>
        <div id='service' className="service-list">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <img src={service.image} alt={service.title} className="product-image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Body;