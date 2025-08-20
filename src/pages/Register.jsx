// Register.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-purple-400 mb-6">
          Register for Nirvana Fest
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Select Event</label>
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="" disabled>
                Choose an event
              </option>
              <option>Science Exhibition</option>
              <option>Coding Competition</option>
              <option>Workshop</option>
              <option>CTF</option>
              <option>AWS Study Jam</option>
              <option>Hackathon</option>
              <option>Treasure Hunt</option>
              <option>DJ Night</option>
              <option>Cultural Events</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
          >
            Register Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
