import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearHechizo = () => {
  const [raza, setRaza] = useState('');
  const [alimento, setAlimento] = useState('');
  const [estado_natural, setEstado_natural] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoPerro = { raza, alimento, estado_natural };
      await axios.post('http://localhost:5000/api/perros', nuevoPerro);
      navigate('/hechizos');
    } catch (error) {
      console.error('Error al crear el perro:', error);
    }
  };

  return (
    <div className="crear-hechizo">
      <h2>Crear perro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="raza">raza</label>
          <input
            type="text"
            id="raza"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="alimento">alimento</label>
          <input
            type="text"
            id="alimento"
            value={alimento}
            onChange={(e) => setAlimento(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="estado_natural">estado natural</label>
          <input
            type="text"
            id="estado_natural"
            value={estado_natural}
            onChange={(e) => setEstado_natural(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CrearHechizo;
