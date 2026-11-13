import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ 
      border: '1px solid #e0e0e0', 
      borderRadius: '10px', 
      overflow: 'hidden', 
      background: '#fff', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      transition: 'transform 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <img src={img} alt={name} style={{ width: '100%', height: '210px', objectFit: 'cover' }} />
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem', textTransform: 'capitalize', color: '#222' }}>{name}</h3>
        <hr style={{ border: '0', borderTop: '1px solid #f0f0f0', margin: '12px 0' }} />
        <p style={{ fontSize: '0.85rem', color: '#777', margin: '5px 0', fontWeight: 'bold' }}>Ingredientes:</p>
        <ul style={{ paddingLeft: '18px', fontSize: '0.85rem', color: '#555', margin: '0 0 15px 0', lineHeight: '1.5' }}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr style={{ border: '0', borderTop: '1px solid #f0f0f0', margin: '12px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>
            ${price.toLocaleString('es-CL')}
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link 
              to={`/pizza/${id}`} 
              style={{ 
                background: 'transparent', 
                border: '1px solid #333', 
                padding: '6px 12px', 
                borderRadius: '6px', 
                textDecoration: 'none', 
                color: '#333', 
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              Ver Más 👀
            </Link>
            <button 
              onClick={() => addToCart({ id, name, price, img })} 
              style={{ 
                background: '#212529', 
                color: '#fff', 
                border: 'none', 
                padding: '6px 12px', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;