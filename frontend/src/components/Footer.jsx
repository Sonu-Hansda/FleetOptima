import React from "react";
const Footer =()=>{
    return (
  <div>
    <footer className="bg-black text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <a href="#" className="text-2xl font-bold flex items-center mb-6">
                <span className="text-orange-600 mr-1">IRON</span>PULSE
              </a>
              <p className="text-gray-400 mb-6">Transform your body and mind with our expert trainers and state-of-the-art facilities.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Classes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Schedule</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Classes</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">HIIT Training</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Strength & Conditioning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Yoga Flow</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Boxing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-orange-600 mt-1 mr-3"></i>
                  <span className="text-gray-400">123 Fitness Street, New York, NY 10001</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt text-orange-600 mt-1 mr-3"></i>
                  <span className="text-gray-400">+1 (800) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope text-orange-600 mt-1 mr-3"></i>
                  <span className="text-gray-400">info@ironpulse.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock text-orange-600 mt-1 mr-3"></i>
                  <span className="text-gray-400">Mon - Sat: 6:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 IronPulse. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                  <i className="fab fa-cc-visa text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                  <i className="fab fa-cc-mastercard text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                  <i className="fab fa-cc-paypal text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </div>
    );
}
export default Footer;