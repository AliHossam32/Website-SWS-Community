import React, { useState } from 'react';
import { Menu, X, Code, LogIn, UserPlus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SWS Community</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Features</a>
            <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Courses</a>
            <a href="#community" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Community</a>
            <a href="#competitions" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Competitions</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <LogIn className="w-4 h-4" />
              <span>Log In</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Features</a>
              <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Courses</a>
              <a href="#community" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Community</a>
              <a href="#competitions" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Competitions</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <button className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <LogIn className="w-4 h-4" />
                  <span>Log In</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  <UserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;