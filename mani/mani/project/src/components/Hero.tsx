import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import profileImg from '../assets/WhatsApp Image 2025-09-12 at 14.30.17_7e67214e.jpg';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-navy-50 to-slate-100">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-navy-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-6 leading-tight">
                Hi, I'm
                <span className="block text-gold-500">Manikanta</span>
                UI/UX Designer & Developer
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-serif">
                Crafting exceptional digital experiences through innovative design and cutting-edge development.
                Transforming ideas into reality with passion and precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <button
                  onClick={scrollToAbout}
                  className="bg-navy-900 text-white px-8 py-4 rounded-lg hover:bg-navy-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-lg hover:bg-navy-900 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="relative z-10 max-w-md mx-auto lg:max-w-none">
                <div className="relative">
                  {/* <img
                    src="/src/assets/WhatsApp Image 2025-09-12 at 14.30.17_7e67214e.jpg"
                    alt="Manikanta - UI/UX Designer & Developer"
                    className="w-full h-80 md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
                  /> */}
                  <img
                    // src="../public/profile.jpg"
                    src={profileImg}
                    alt="Mani Kanta - UI/UX Designer"
                    // className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                    className="w-full h-80 md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-8 left-8 w-full h-full bg-gold-200 rounded-2xl -z-10"></div>

              {/* Floating badges */}
              <div className="hidden md:block absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-900">1+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-500">10+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-navy-900" />
      </button>
    </section>
  );
}