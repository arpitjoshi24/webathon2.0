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
    alert("🎉 Registration Successful!");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-black to-purple-950 overflow-hidden px-6">
      {/* Floating Glowing Shapes */}
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-10 w-32 h-32 bg-purple-600/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"
      />

      {/* Registration Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168,85,247,0.6)" }}
        className="relative w-full max-w-lg bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl p-8 border border-white/20"
      >
        <h1 className="text-4xl font-extrabold text-center text-purple-400 mb-8 drop-shadow-lg">
          Register for Nirvana Fest
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Floating Label Inputs */}
          {[
            { label: "Full Name", type: "text", name: "name", placeholder: "Enter your name" },
            { label: "Email", type: "email", name: "email", placeholder: "Enter your email" },
            { label: "Phone Number", type: "tel", name: "phone", placeholder: "Enter your phone number" },
          ].map((field, i) => (
            <div key={i} className="relative">
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="peer w-full p-3 rounded-xl bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder={field.placeholder}
              />
              <label
                className="absolute left-3 top-3 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-purple-300 peer-focus:text-sm"
              >
                {field.label}
              </label>
            </div>
          ))}

        

          {/* Button with Pulse Animation */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            animate={{ boxShadow: ["0 0 10px #a855f7", "0 0 20px #a855f7", "0 0 10px #a855f7"] }}
            transition={{ repeat: Infinity, duration: 2 }}
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-xl transition-all"
          >
             Register Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
