import React from 'react';

function ContactMap() {
  return (
    <section id='about'>
      <h2>Contact Us</h2> <br/>
      <p>Email: mdsstartup0@gmail.com</p>
      <p>Phone: 0822-3430-4181</p>
      <br/><br/>
      <h2>Lokasi Kami</h2> <br/>
      <iframe
        title="Lokasi"
        src="https://maps.app.goo.gl/esoojktmYqLrUwEj8"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default ContactMap;