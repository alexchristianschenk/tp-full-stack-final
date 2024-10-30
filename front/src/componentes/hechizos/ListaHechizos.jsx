import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaHechizos = () => {
  const [perros, setPerros] = useState([]);

  useEffect(() => {
    const fetchPerros = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/perros');
        setPerros(response.data);
      } catch (error) {
        console.error('Error al obtener los Perros:', error);
      }
    };

    fetchPerros();
  }, []);

  return (
    <div>
      <h1>Lista de perros</h1>
      <Link to="/crear" className="crear-hechizo">Crear nuevo perro</Link>
      <ul>
        {perros.map((perros) => (
          <li key={perros._id}>
            {perros.raza} - <Link to={`/perro/${perros._id}`}>Ver Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaHechizos;