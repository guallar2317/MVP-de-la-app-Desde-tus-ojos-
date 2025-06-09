import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Simulation() {
  const [startTime, setStartTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleClick = () => {
    const timeTaken = Date.now() - startTime;
    navigate("/resultado", { state: { time: timeTaken } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center blur-sm px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Encuentra y haz clic en el botón "Confirmar pedido"</h2>
      <button 
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition" 
        onClick={handleClick}
      >
        Confirmar pedido
      </button>
    </div>
  );
}
