// About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-purple-400"
        >
          About Nirvana Fest
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          Nirvana Fest is a celebration of innovation, creativity, and culture. 
          From school competitions to thrilling college-level hackathons, and 
          from exciting outdoor treasure hunts to mesmerizing cultural nights – 
          we bring students, innovators, and creators together under one roof.
        </motion.p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Innovation",
              desc: "Showcasing talent through coding, science exhibitions, and more.",
            },
            {
              title: "Community",
              desc: "Building connections among schools, colleges, and innovators.",
            },
            {
              title: "Celebration",
              desc: "From DJ nights to cultural events – a night to remember!",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-purple-300 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
