import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Pizza = () => {
  const { id } = useParams(); // 👈 Captura el id de la URL
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) return <p style={{ padding: '20px' }}>Cargando pizza...</p>;

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', background: '#fff' }}>
        <img src={pizza.img} alt={pizza.name} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '6px' }} />
        <h2 style={{ textTransform: 'capitalize', marginTop: '15px' }}>{pizza.name}</h2>
        <p style={{ color: '#666' }}>{pizza.desc}</p>
        <h4>Ingredientes:</h4>
        <ul>
          {pizza.ingredients.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Precio: ${pizza.price.toLocaleString('es-CL')}</span>
          <button 
            onClick={() => addToCart(pizza)}
            style={{ background: '#1a1a1a', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;