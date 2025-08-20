// Events.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    title: "Science Exhibition",
    category: "School Level",
    image: "WhatsApp Image 2025-08-20 at 3.35.55 PM.jpeg"  },
  {
    title: "Coding Competition",
    category: "School Level",
    image: "WhatsApp Image 2025-08-20 at 3.30.43 PM.jpeg"  },
  {
    title: "Workshop",
    category: "School Level",
    image: "WhatsApp Image 2025-08-20 at 3.35.52 PM.jpeg"  },
  {
    title: "Workshop & Seminar",
    category: "College Level",
    image: "WhatsApp Image 2025-08-20 at 3.39.32 PM.jpeg"  },
  {
    title: "Capture the Flag (CTF)",
    category: "College Level",
    image: "Nirvana Tech Fest_GEHU.png"  },
  {
    title: "AWS Study Jam",
    category: "College Level",
    image: "IMG_9170.JPG"  },
  {
    title: "Hackathon",
    category: "College Level",
    image: "IMG_9170.JPG"  },
  {
    title: "Stalls",
    category: "Outdoor",
    image: "IMG_9170.JPG"  },
  {
    title: "Treasure Hunt",
    category: "Outdoor",
    image: "IMG_9209.JPG"  },
  {
    title: "DJ Night",
    category: "Outdoor",
    image: "IMG_9209.JPG"  },
  {
    title: "Cultural Events",
    category: "Outdoor",
    image: "Nirvana Tech Fest_GEHU.png"  },
];

export default function Events() {
  const [index, setIndex] = useState(0);

  // Auto-play every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % events.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + events.length) % events.length);

  return (
    <section id="events" className="bg-black py-16">
      <div className="relative w-full max-w-4xl mx-auto px-4">
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-purple-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={events[index].image}
                alt={events[index].title}
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {events[index].title}
                </h2>
                <p className="text-purple-400 text-lg">
                  {events[index].category}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-purple-600/70 p-2 rounded-full text-white hover:bg-purple-700 transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-purple-600/70 p-2 rounded-full text-white hover:bg-purple-700 transition"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {events.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-purple-500 scale-110" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
