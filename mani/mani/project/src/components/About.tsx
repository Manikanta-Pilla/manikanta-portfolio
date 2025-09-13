import React from 'react';
import { Palette, Code, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900">
                UI/UX Designer & Frontend Developer
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed font-serif">
                I'm Manikanta, a passionate UI/UX designer and frontend developer with expertise in
                creating user-centered digital experiences. I specialize in transforming complex
                problems into simple, elegant, and intuitive design solutions.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-serif">
                With a strong foundation in design principles and modern development technologies, 
                I bridge the gap between beautiful aesthetics and functional implementation, 
                ensuring every pixel serves a purpose.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette size={24} className="text-gold-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy-900">10+</h4>
                  <p className="text-slate-600">Designs Created</p>
                </div>

                <div className="text-center">
                  <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code size={24} className="text-gold-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy-900">5+</h4>
                  <p className="text-slate-600">Apps Developed</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-navy-900 mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-slate-800">Bachelor of Technology</h5>
                    <p className="text-slate-600">Computer Science Engineering</p>
                    <p className="text-sm text-slate-500">pragati engineering college</p>
                    <p className="text-sm text-gold-600">2022-2026</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-navy-900 mb-4">Design Philosophy</h4>
                <p className="text-slate-600 leading-relaxed font-serif italic">
                  "Great design is not just about making things look beautiful—it's about creating 
                  meaningful experiences that solve real problems and delight users at every touchpoint."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}