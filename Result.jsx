import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const timeTaken = location.state?.time || 0;

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold mb-4">Resultado</h2>
      <p className="mb-6 text-center">Te ha tomado <strong>{(timeTaken / 1000).toFixed(2)}s</strong> encontrar el botón.</p>
      <p className="mb-8 max-w-md text-center text-sm text-gray-700">
        Para personas con visión reducida, este tipo de tareas puede ser mucho más difíciles. Usa colores de alto contraste y botones visibles.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
