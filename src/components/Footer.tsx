import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <img
      src="https://raw.githubusercontent.com/vishalukadv/advik/main/pixelcut-export%20(8)%20(1).png"
      alt="Advikentures Logo"
      className="h-8 w-auto transition-all duration-200"
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
    <span className="text-xl font-bold text-white">Advikentures</span>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p className="text-gray-400 mt-4">
              Your journey to adventure and wellness begins here.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#adventure" className="text-gray-400 hover:text-white">Adventure Sports</a></li>
              <li><a href="#yoga" className="text-gray-400 hover:text-white">Yoga Retreats</a></li>
              <li><a href="#stays" className="text-gray-400 hover:text-white">Stays</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Advikentures Inc., FD-56,</li>
              <li>Kavi Nagar, Ghaziabad 201002</li>
              <li>Phone: +916395406996</li>
              <li>Email: info@advikentures.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            Copyright © Advikentures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;