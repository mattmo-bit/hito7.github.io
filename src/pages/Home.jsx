import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };

    consultarApi();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ padding: '0 40px 40px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '25px', color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
          Nuestras Pizzas Destacadas 🍕
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', justifyContent: 'center' }}>
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;