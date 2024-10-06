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
        text-cyber-black font-bold 
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
      <span>Comprar ya</span>
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

      <div className="text-left font-extralight">
        <p className="text-cyber-teal-300 m-4">
          El PDF más vendido en el Perú. Unete al movimiento.
        </p>

        <p className="m-4">
          <span>¿Cansado de obtener respuestas mediocres?</span> Aprende a
          formular preguntas perfectas para que la IA te dé respuestas
          impecables y útiles en todo momento.
        </p>

        <p className="m-4">
          <span>
            Ya sea que trabajes en marketing, tecnología, finanzas o ambulante,
          </span>{" "}
          tendrás el poder de adaptar las IA a cualquier sector y recibir
          respuestas personalizadas con precisión quirúrgica.
        </p>

        <p className="m-4">
          <span>Aprende a personalizar cada consulta, cada interacción,</span>{" "}
          para obtener respuestas que realmente impacten tu negocio o proyecto.
          No más preguntas mal formuladas, solo resultados.
        </p>

        <p className="text-cyber-teal-300 m-4">
          Más de 1000+ comandos para ChatGPT. 300 páginas. 3 secciones. 36
          categorías.
        </p>
      </div>
      <div className="flex justify-center m-4">
        <WhatsAppCTAButton onClick={handlePurchase} />
      </div>
    </div>
  );
}
