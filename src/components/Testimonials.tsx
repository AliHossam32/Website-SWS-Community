import React from 'react';
import { Star, Quote, Award, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Computer Science Student, MIT',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'STEMHub completely transformed my approach to programming. The interactive courses and community support helped me win my first hackathon and land an internship at Google.',
      achievement: 'Google Intern 2024'
    },
    {
      name: 'Marcus Johnson',
      role: 'High School Senior, CA',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The English for STEM module improved my technical writing skills dramatically. I went from struggling with research papers to publishing in my school\'s science journal.',
      achievement: 'Science Fair Winner'
    },
    {
      name: 'Priya Patel',
      role: 'Engineering Student, Stanford',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The project building guidance was incredible. I developed a mobile app for environmental monitoring that\'s now being used by my local community.',
      achievement: 'Environmental Innovation Award'
    },
    {
      name: 'Alex Kim',
      role: 'Data Science Student, Berkeley',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The AI-powered learning paths adapted perfectly to my skill level. I mastered machine learning concepts faster than I thought possible.',
      achievement: 'ML Competition Champion'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Bioengineering Student, Harvard',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The mentorship program connected me with industry professionals who guided my research project. Now I\'m presenting at international conferences.',
      achievement: 'Research Excellence Award'
    },
    {
      name: 'David Thompson',
      role: 'Physics Student, Caltech',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The competition prep courses gave me the confidence and skills to compete nationally. I placed 2nd in the Physics Olympiad last year.',
      achievement: 'Physics Olympiad Medalist'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who have transformed their academic and career prospects 
            through our comprehensive STEM education platform.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-16 h-16 text-blue-600" />
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">{testimonial.achievement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(2).map((testimonial, index) => (
            <div
              key={index + 2}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h5>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-gray-600 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-600">{testimonial.achievement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Would Recommend</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25,000+</div>
              <div className="text-blue-100">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;