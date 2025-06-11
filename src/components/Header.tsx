import React, { useState } from 'react';
import { Menu, X, Code, LogIn, UserPlus, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 md:h-11 w-auto object-contain transition-all duration-200" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">{t.header.features}</a>
            <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">{t.header.courses}</a>
            <a href="#community" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">{t.header.community}</a>
            <a href="#competitions" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">{t.header.competitions}</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span>{t.header.language}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <LogIn className="w-4 h-4" />
              <span>{t.header.login}</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              <UserPlus className="w-4 h-4" />
              <span>{t.header.signup}</span>
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
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">{t.header.features}</a>
              <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">{t.header.courses}</a>
              <a href="#community" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">{t.header.community}</a>
              <a href="#competitions" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">{t.header.competitions}</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span>{t.header.language}</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <LogIn className="w-4 h-4" />
                  <span>{t.header.login}</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  <UserPlus className="w-4 h-4" />
                  <span>{t.header.signup}</span>
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