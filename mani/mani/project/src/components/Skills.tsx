import React from 'react';

const designSkills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Figma & Adobe XD', level: 90 },
  { name: 'Prototyping', level: 88 },
  { name: 'User Research', level: 85 },
  { name: 'Wireframing', level: 92 },
  { name: 'Design Systems', level: 87 },
];

const developmentSkills = [
  { name: 'React & Next.js', level: 90 },
  { name: 'HTML/CSS/JavaScript', level: 95 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Git & Version Control', level: 85 },
];

const tools = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Photoshop',
  'Illustrator',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Git',
  'VS Code',
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-serif">
              A comprehensive skill set spanning design thinking to technical implementation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Design Skills */}
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-8">Design Skills</h3>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-gold-500 to-gold-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:from-navy-500 group-hover:to-navy-600"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Skills */}
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-8">Development Skills</h3>
              <div className="space-y-6">
                {developmentSkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-navy-500 to-navy-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:from-gold-500 group-hover:to-gold-600"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-8">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={tool}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="font-medium text-slate-700">{tool}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-navy-900 mb-4">My Approach</h4>
                <p className="text-slate-600 leading-relaxed font-serif">
                  "I believe in user-centered design that combines aesthetic appeal with 
                  functional excellence. Every design decision is backed by research, 
                  tested with users, and implemented with precision."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}