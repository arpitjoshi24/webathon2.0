"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="#home" className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute ">
        <img
          src="./home.webp"
          alt="Tech Fest Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-4"
      >
        {/* Festival Title */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Nirvana Tech Fest 2.0
        </motion.h1>

       

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm md:text-base">
            📅 15th – 17th March 2025
          </span>
         
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform">
             Register Now
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold shadow-md hover:bg-white/20 transition">
             Explore Events
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
