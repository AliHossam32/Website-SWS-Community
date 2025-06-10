import React from 'react';
import { Brain, Code2, Users, Award, BookOpen, MessageCircle, TrendingUp, GraduationCap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Scholarship Guidance',
      description: 'Comprehensive preparation for international university scholarships and applications.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Personalized learning paths adapted to your skill level and scholarship goals.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code2,
      title: 'Interactive Coding',
      description: 'Hands-on programming tutorials with real-time feedback and testing.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Peer Collaboration',
      description: 'Connect with fellow students for group projects and study sessions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Award,
      title: 'Competition Ready',
      description: 'Specialized training for hackathons, science fairs, and STEM competitions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BookOpen,
      title: 'Technical English',
      description: 'Master academic and technical vocabulary.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'Expert Mentorship',
      description: 'Get guidance from industry professionals and scholarship recipients.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Detailed analytics and achievements to monitor your scholarship readiness.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Train Like a STEM Student & Win Scholarships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven educational methods 
            to help you master essential skills, compete at the highest level, and secure international scholarships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;