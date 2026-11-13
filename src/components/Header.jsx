import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '60px 20px',
      marginBottom: '30px'
    }}>
      <div>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '10px', fontWeight: 'bold' }}>¡Pizzería Mamma Mía!</h1>
        <p style={{ fontSize: '1.2rem', margin: 0 }}>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;