import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignIn = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Data:', formData);
    // Custom validation can go here
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80 z-10"></div>
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20high-end%20gym%20interior%20with%20dramatic%20lighting%2C%20featuring%20weight%20equipment%20and%20training%20machines%20with%20orange%20neon%20accents%2C%20dark%20atmosphere%20with%20professional%20equipment%20arranged%20in%20a%20spacious%20environment%2C%20high%20contrast%20dramatic%20lighting&width=1440&height=800&seq=gym-bg-2&orientation=landscape" 
            alt="Gym Background" 
            className="w-full h-full object-cover object-top opacity-50"
          />

          {/* Geometric Overlays */}
          <div className="absolute top-0 left-0 w-full h-full z-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/10 to-transparent transform -skew-x-12"></div>
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 border-t-2 border-orange-500/30 transform -skew-x-12"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-orange-500/20 transform rotate-45"></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative z-30 w-full max-w-md mx-auto p-8 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg shadow-2xl mb-12 mt-10">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">SIGN IN TO YOUR ACCOUNT</h2>
            <p className="text-gray-400">Welcome back to IRON PULSE. Let’s crush those goals.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                placeholder="Enter your full name"
                required
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                placeholder="Enter your email address"
                required
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                placeholder="Enter your password"
                required
              />
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-4 !rounded-button whitespace-nowrap cursor-pointer hover:bg-orange-600 transition-colors duration-300 font-bold text-lg shadow-lg shadow-orange-500/20"
              >
                SIGN IN
              </button>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-400">
                Don’t have an account? <a href="/SignUp" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">Join Now</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
