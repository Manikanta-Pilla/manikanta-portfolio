import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Let's Create Together
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-serif">
              Ready to bring your design vision to life? I'd love to discuss your project and explore how we can create exceptional user experiences together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-100 p-3 rounded-full">
                    <Mail size={24} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900">Email</h4>
                    <p className="text-slate-600">manikanta.design@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-100 p-3 rounded-full">
                    <Phone size={24} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900">Phone</h4>
                    <p className="text-slate-600">+91 9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-100 p-3 rounded-full">
                    <MapPin size={24} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900">Location</h4>
                    <p className="text-slate-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                <h4 className="text-xl font-bold text-navy-900 mb-4">What I Offer</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    UI/UX Design & Prototyping
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    Frontend Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    Design System Creation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    User Research & Testing
                  </li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="bg-navy-900 text-white p-3 rounded-full hover:bg-gold-600 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-navy-900 text-white p-3 rounded-full hover:bg-gold-600 transition-colors duration-300">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="ui-design">UI Design</option>
                    <option value="ux-research">UX Research</option>
                    <option value="frontend-dev">Frontend Development</option>
                    <option value="design-system">Design System</option>
                    <option value="consultation">Design Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project, goals, and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-900 text-white py-4 px-6 rounded-lg hover:bg-navy-800 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}