import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Desde tus ojos</h1>
      <p className="mb-8 text-center max-w-xl">
        Ponte en sus ojos, diseña con el corazón. Simula cómo viven otras personas la web.
      </p>
      <Link to="/simulacion">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Empezar simulación
        </button>
      </Link>
    </div>
  );
}
