import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Betty Mekonnen</h3>
            <p className="text-gray-400">Software Engineer</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/bettygitbie" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/betelehem-mekonnen-a9bb38298/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="mailto:bttyty@gmail.com" className="text-gray-400 hover:text-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Betty Mekonnen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}