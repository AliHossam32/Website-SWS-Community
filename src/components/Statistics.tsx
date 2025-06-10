import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, BookOpen, Code, Globe, Target, GraduationCap } from 'lucide-react';

const Statistics = () => {
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    scholarships: 0,
    competitions: 0
  });

  const finalValues = {
    students: 1,
    courses: 1,
    scholarships: 1,
    competitions: 1
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const increment = finalValues[key] / steps;
      let current = 0;
      
      return setInterval(() => {
        current += increment;
        if (current >= finalValues[key]) {
          current = finalValues[key];
          clearInterval(intervals[Object.keys(finalValues).indexOf(key)]);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const mainStats = [
    {
      icon: Users,
      value: counters.students.toLocaleString() + '+',
      label: 'Active Students',
      description: 'Learning and growing together',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      value: counters.courses.toString() + '+',
      label: 'Expert Courses',
      description: 'Comprehensive learning modules',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: GraduationCap,
      value: counters.scholarships.toLocaleString() + '+',
      label: 'Scholarships Won',
      description: 'International university acceptances',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      value: counters.competitions.toLocaleString() + '+',
      label: 'Competition Wins',
      description: 'Success stories and achievements',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const additionalStats = [
    { icon: Globe, label: 'Countries', value: '120+' },
    { icon: Target, label: 'Success Rate', value: '94%' },
    { icon: GraduationCap, label: 'Scholarship Rate', value: '78%' },
    { icon: TrendingUp, label: 'Growth Rate', value: '150%' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering the Next Generation of STEM Leaders
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our impact speaks for itself. Join thousands of students who have transformed 
            their STEM journey, won scholarships, and achieved remarkable success.
          </p>
        </div>

        {/* Main Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-blue-200 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Join This Success Story?</h3>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Start your journey today and become part of a community that's shaping the future of STEM education 
            and opening doors to international opportunities.
          </p>
          
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold">
            Start Learning Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Statistics;