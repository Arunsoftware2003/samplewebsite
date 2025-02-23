import { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
    setIsSignedUp(true);
  };

  if (isSignedUp) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-900 to-teal-900 p-6">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 text-lg" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-lg" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-lg" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 transition-all"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md"
          >
            Sign Up
          </motion.button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account? <a href="/login" className="text-green-500 hover:underline">Sign In</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
