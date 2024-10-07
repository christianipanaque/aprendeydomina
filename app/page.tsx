"use client";
import { MessageCircle } from "lucide-react";

const WhatsAppCTAButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        uppercase
        font-black
        bg-cyber-teal-500 hover:bg-cyber-teal-400 
        text-cyber-black
        py-3 px-6 
        rounded-md 
        transition duration-300 ease-in-out 
        transform hover:scale-105 
        shadow-lg hover:shadow-cyber-teal-500/50 
        border-2 border-cyber-teal-300 
        focus:outline-none focus:ring-2 focus:ring-cyber-teal-300 focus:ring-opacity-50
        text-lg sm:text-xl
        flex items-center justify-center space-x-2
      "
    >
      <MessageCircle size={24} />
      <span>Descargar PDF</span>
    </button>
  );
};

export default function Page({}) {
  const handlePurchase = () => {
    // Handle purchase logic here, e.g., open WhatsApp
    window.open(
      "https://wa.me/+51913607355?text=Me%20interesa%20comprar%20el%20libro%20Aprende%20y%20Domina%20ChatGPT",
      "_blank"
    );
  };

  return (
    <div className="bg-cyber-gray max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
      <div>
        <img
          src="./images/aprende-y-domina-lr.jpg"
          alt="Aprende y Domina ChatGPT"
        />
      </div>
      <h1 className="text-cyber-teal-400 m-4 text-3xl uppercase font-black	">
        Aprende y Domina <span className="text-cyber-white">ChatGPT</span>
      </h1>

      <div className="text-left">
        <p className="text-cyber-teal-300 m-4">
          El PDF más vendido en el Perú. Unete al movimiento.
        </p>

        <p className="m-4">
          Obtendrás acceso a más de 1000+ comandos especializados,
          cuidadosamente diseñados para mejorar la precisión de tus
          interacciones con ChatGPT. Esto te permitirá estructurar consultas más
          complejas y obtener respuestas altamente detalladas, resolviendo el
          problema de no recibir la información correcta en tus consultas
          actuales.
        </p>

        <p className="text-cyber-teal-300 m-4">
          Más de 1000+ comandos para ChatGPT.
        </p>

        <p className="m-4">
          Aprenderás a formular preguntas precisas y claras, eliminando la
          frustración de obtener respuestas imprecisas o irrelevantes. El PDF te
          enseña cómo adaptar cada comando a diferentes contextos, asegurando
          que las respuestas de ChatGPT siempre sean útiles y ajustadas a tus
          necesidades, acelerando tu aprendizaje y dominio de la herramienta.
        </p>

        <p className="text-cyber-teal-300 m-4">Más de 20+ categorías.</p>

        <p className="m-4">
          Maximizarás la efectividad de ChatGPT con comandos personalizables,
          optimizando el tiempo que dedicas a la investigación y generación de
          contenido. Este conocimiento te permitirá superar la barrera de no
          aprovechar al máximo el potencial de la IA, proporcionándote
          respuestas más rápidas y precisas, aumentando tu productividad.
        </p>
        <p className="text-cyber-teal-300 m-4">Más de 300+ páginas.</p>
      </div>
      <div>
        WhatsApp:{" "}
        <a
          href="https://wa.me/message/W6AQ7BGM2AS7P1"
          className="text-cyber-teal-300 underline"
        >
          913607355
        </a>
      </div>
      <div className="flex justify-center m-4">
        <WhatsAppCTAButton onClick={handlePurchase} />
      </div>
    </div>
  );
}
