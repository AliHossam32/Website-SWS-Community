import React, { useState } from 'react';
import { ArrowRight, Star, Shield, Zap, Users, GraduationCap } from 'lucide-react';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    try {
      console.log('Submitting form data:', submissionData);
      
      const response = await fetch('https://hook.eu2.make.com/ax2kyd8qhhlkx5hwcu8l52keah2qp1qa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (response.ok) {
        alert('Thank you for starting your free trial! We\'ll be in touch soon.');
        setFormData({ name: '', email: '', goal: '' });
      } else {
        throw new Error(`Failed to submit form: ${response.status} ${responseText}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or contact support if the problem persists.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Scholarship Success',
      description: 'Proven track record with 1+ international scholarships won'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Start learning immediately with our comprehensive course library'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 community and mentor support to guide your journey'
    },
    {
      icon: Shield,
      title: 'Money-Back Guarantee',
      description: '30-day guarantee if you\'re not completely satisfied'
    }
  ];

  return (
    <section id="call-to-action" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> STEM Journey?</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join over 100 students who have already accelerated their learning, 
            won scholarships, built impressive portfolios, and secured their future with SWS Community.
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-blue-100 ml-2">Rated 4.5/5 by 100+ students</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">What You Get When You Join Today:</h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-blue-100">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pricing highlight */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold">Free to Start</div>
                  <div className="text-blue-200">No credit card required</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-200 line-through">$299/month</div>
                  <div className="text-lg font-semibold text-green-400">Free Trial</div>
                </div>
              </div>
              <div className="text-sm text-blue-100">
                Access all courses, scholarship guidance, community features, and mentorship for 1 year free
              </div>
            </div>
          </div>

          {/* Right: CTA Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Free Trial</h3>
              <p className="text-gray-600">Join thousands of successful STEM students</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Goal
                </label>
                <select
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select your goal</option>
                  <option value="scholarship">Win International Scholarship</option>
                  <option value="competition">Excel in Competitions</option>
                  <option value="skills">Improve STEM Skills</option>
                  <option value="projects">Build Amazing Projects</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                No spam, unsubscribe at any time. By signing up, you agree to our terms.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA for mobile */}
        <div className="lg:hidden mt-12 text-center">
          <button className="w-full max-w-md mx-auto flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold">
            <span>Join SWS Community Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;