import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { UserContext } from './context/UserContext';

function App() {
  const { token } = useContext(UserContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Si hay token, redirige login/register al home */}
          <Route 
            path="/login" 
            element={!token ? <LoginPage /> : <Navigate to="/" />} 
          />
          <Route 
            path="/register" 
            element={!token ? <RegisterPage /> : <Navigate to="/" />} 
          />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          
          {/* Ruta protegida: si no hay token, redirige a /login */}
          <Route 
            path="/profile" 
            element={token ? <Profile /> : <Navigate to="/login" />} 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;