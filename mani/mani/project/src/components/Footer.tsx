import React from 'react';
import { Github, Linkedin, Mail, Figma } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">Manikanta</div>
              <p className="text-slate-300 mb-6 leading-relaxed font-serif">
                UI/UX Designer & Frontend Developer passionate about creating beautiful, 
                functional digital experiences that make a difference.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Manikanta-Pilla" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-gold-600 transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/pilla-manikanta-47b876259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-gold-600 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.behance.net/saimanipilla" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-gold-600 transition-colors duration-300">
                  <Figma size={20} />
                </a>
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-gold-600 transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Prototyping</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Frontend Development</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Design Systems</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">User Research</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#about" className="hover:text-gold-400 transition-colors duration-200">About</a></li>
                <li><a href="#portfolio" className="hover:text-gold-400 transition-colors duration-200">Portfolio</a></li>
                <li><a href="#skills" className="hover:text-gold-400 transition-colors duration-200">Skills</a></li>
                <li><a href="#contact" className="hover:text-gold-400 transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Resume</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Mani Kanta. All rights reserved. 
              <span className="mx-2">|</span>
              Designed & Developed with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
