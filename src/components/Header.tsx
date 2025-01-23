import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Betty Mekonnen</h1>
        <div className="flex items-center gap-6">
          <a href="#about" className="headers text-gray-600 hover:text-orange-900">About</a>
          <a href="#skills" className="headers text-gray-600 hover:text-orange-900">Skills</a>
          <a href="#projects" className="headers text-gray-600 hover:text-orange-900">Projects</a>
          <a href="#contact" className="headers text-gray-600 hover:text-orange-900">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/bettygitbie" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/betelehem-mekonnen-a9bb38298/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
          <a href="mailto:bttyty@gmail.com" className="text-gray-600 hover:text-gray-900">
            <Mail size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}