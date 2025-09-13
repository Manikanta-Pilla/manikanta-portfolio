import React, { useState } from 'react';
import { ExternalLink, Github, Figma } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'QuickPay Payments Platform',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern payment platform design with secure transaction flows, intuitive user interface, and seamless integration for online payments.',
    tech: ['Figma', 'Prototyping', 'User Research'],
    liveUrl: '#',
    figmaUrl: '#'
  },
  {
    id: 2,
    title: 'Revo Clothing Ecommerce Platform',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Eco-friendly clothing ecommerce platform with sustainable design, personalized shopping experience, and easy checkout process.',
    tech: ['Adobe XD', 'Design System', 'React'],
    liveUrl: '#',
    figmaUrl: '#'
  },
  {
    id: 3,
    title: 'PlanIt Trip Planner',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive trip planning application with itinerary management, destination recommendations, and collaborative features for travelers.',
    tech: ['Figma', 'User Testing', 'Accessibility'],
    liveUrl: '#',
    figmaUrl: '#'
  }
];

const categories = ['All', 'Web Design', 'Mobile Design', 'Design System'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-serif">
              A showcase of design projects that demonstrate my approach to solving user experience challenges
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-navy-900 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button className="bg-white text-navy-900 p-3 rounded-full hover:bg-gold-500 hover:text-white transition-colors duration-200">
                        <ExternalLink size={20} />
                      </button>
                      <button className="bg-white text-navy-900 p-3 rounded-full hover:bg-gold-500 hover:text-white transition-colors duration-200">
                        <Figma size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gold-600 font-medium bg-gold-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed font-serif">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">My Design Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-600">1</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">Research</h4>
                <p className="text-slate-600">Understanding user needs and business goals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-600">2</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">Ideate</h4>
                <p className="text-slate-600">Brainstorming solutions and creating wireframes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-600">3</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">Design</h4>
                <p className="text-slate-600">Creating high-fidelity designs and prototypes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-600">4</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">Develop</h4>
                <p className="text-slate-600">Implementing designs with clean, efficient code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}