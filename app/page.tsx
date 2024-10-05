"use client";
import { MessageCircle } from "lucide-react";

const WhatsAppCTAButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
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
      <h1 className="text-cyber-teal-400 m-4">Aprende y Domina ChatGPT</h1>
      <p className="text-cyber-teal-200 m-4">
        El PDF más vendido en nuestro Perú. Unete al movimiento.
      </p>
      <div className="flex justify-center m-4">
        <WhatsAppCTAButton onClick={handlePurchase} />
      </div>
    </div>
  );
}
