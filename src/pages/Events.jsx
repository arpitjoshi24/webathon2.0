import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Hackathon 2025",
    desc: "24-hour coding marathon to solve real-world challenges.",
    date: "March 15, 2025",
  },
  {
    title: "Robo Wars",
    desc: "Battle of autonomous and manually controlled robots.",
    date: "March 16, 2025",
  },
  {
    title: "Tech Talks",
    desc: "Industry leaders sharing insights on emerging technologies.",
    date: "March 17, 2025",
  },
];

export default function Events() {
  return (
    <section id="events" className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-purple-400"
        >
           Our  Events
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-300"
        >
          Experience the thrill of innovation, creativity, and technology.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-gradient-to-br from-purple-900/40 to-cyan-900/40 p-6 rounded-2xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold text-cyan-400">{event.title}</h3>
            <p className="mt-3 text-gray-300">{event.desc}</p>
            <span className="inline-block mt-4 px-4 py-2 text-sm font-semibold bg-purple-600/30 border border-purple-400/40 rounded-full text-purple-300">
              {event.date}
            </span>
            <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-3xl -z-10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
