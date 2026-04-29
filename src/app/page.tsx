"use client";

import { useState, useEffect } from "react";
import BtnEspanol from "./components/BtnEspanol";
import BtnIngles from "./components/BtnIngles";
import Lista from "./components/lista";

export default function App() {

  const palabras = [
    { es: "sol", en: "sun" },
    { es: "estrela", en: "star" },
    { es: "Comida", en: "Food" },
    { es: "Escuela", en: "School" },
    { es: "Libro", en: "Book" },
    { es: "Agua", en: "Water" },
    { es: "Coche", en: "Car" },
    { es: "Puerta", en: "Door" },
    { es: "Ciudad", en: "City" },
    { es: "Montaña", en: "Mountain" },
    { es: "Nieve", en: "Snow" },
    { es: "Nieve", en: "Snow" },
    { es: "Arena", en: "Sand" },
    { es: "Isla", en: "Island" },
    { es: "Playa", en: "Beach" },
    { es: "Valle", en: "Valley" },
    { es: "Cueva", en: "Cave" },



    { es: "Trabajo", en: "Work" }
  ];

  // Estado del idioma
  const [idioma, setIdioma] = useState("es");

  // Estado de la lista mostrada
  const [lista, setLista] = useState<string[]>([]);

  // Función para cambiar idioma
  const cambiarIdioma = (nuevoIdioma: string) => {
    setIdioma(nuevoIdioma);
  };

  // useEffect para actualizar la lista automáticamente
  useEffect(() => {
    const nuevaLista = palabras.map((item) => item[idioma as "es" | "en"]);
    setLista(nuevaLista);
  }, [idioma]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Traductor de palabras</h1>
      <Lista lista={lista} />
      <div className="inline-flex">
        <button type="button" 
        onClick={() =>cambiarIdioma("es")} 
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Espanol
        </button>
        <button type="button" 
        onClick={() =>cambiarIdioma("en")} 
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Ingles
        </button>
      </div>
    </div>

  );
}