import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'CTO, TechSolutions',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Mani delivered exceptional full-stack solutions that exceeded our expectations. His technical expertise and attention to detail are remarkable.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Product Manager, StartupHub',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Working with Mani was fantastic. His problem-solving skills and ability to deliver scalable solutions helped us launch our platform successfully.',
    rating: 5
  },
  {
    id: 3,
    name: 'Arjun Patel',
    role: 'Tech Lead, InnovateLabs',
    image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Mani\'s expertise in modern web technologies and clean code practices made him an invaluable team member. Highly recommended!',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-serif">
              Don't just take my word for it—here's what my clients have to say
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <Quote size={24} className="text-gold-500 mr-2" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed font-serif italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold-500">100%</div>
                <div className="text-slate-300">Project Success</div>
              </div>
              <div className="w-px h-16 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold-500">25+</div>
                <div className="text-slate-300">Projects Built</div>
              </div>
              <div className="w-px h-16 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold-500">5★</div>
                <div className="text-slate-300">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}