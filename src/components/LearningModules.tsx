import React from 'react';
import { Globe, Code, Wrench, Trophy, Users, ArrowRight, Clock, Star, GraduationCap } from 'lucide-react';

const LearningModules = () => {
  const modules = [
    {
      icon: GraduationCap,
      title: 'Scholarship Preparation',
      description: 'Complete guidance for international university scholarship applications and requirements',
      features: ['Application essays', 'Interview preparation', 'Portfolio development', 'Scholarship matching'],
      duration: '10 weeks',
      level: 'All Levels',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Globe,
      title: 'English',
      description: 'Master technical vocabulary, academic writing, and presentation skills',
      features: ['Technical vocabulary', 'Academic writing', 'Presentation skills', 'Research communication'],
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Code,
      title: 'Programming Hub',
      description: 'Interactive coding tutorials with real-world projects and challenges',
      features: ['Python & Java', 'Algorithms & Data Structures', 'Web Development', 'Mobile Apps'],
      duration: '24 weeks',
      level: 'All Levels',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Wrench,
      title: 'Project Building',
      description: 'Step-by-step guidance to develop impressive STEM projects',
      features: ['Idea generation', 'Project planning', 'Implementation', 'Documentation'],
      duration: '6 weeks',
      level: 'Intermediate',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Trophy,
      title: 'Competition Prep',
      description: 'Specialized training for hackathons, science fairs, and contests',
      features: ['Competition strategies', 'Team formation', 'Pitch preparation', 'Winning examples'],
      duration: '4 weeks',
      level: 'Advanced',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Learning Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured courses designed to build essential skills progressively, 
            from foundational knowledge to scholarship-winning expertise and competition-level performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {modules.slice(0, 2).map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className={`${module.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9 rating</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{module.title}</h3>
                <p className="text-gray-600 mb-6">{module.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                    <span>•</span>
                    <span>{module.level}</span>
                  </div>
                  
                  <button className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-md">
                    <span className="font-medium">Start Course</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.slice(2).map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index + 2}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{module.description}</p>

                <div className="space-y-2 mb-4">
                  {module.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{module.duration}</span>
                  <span>{module.level}</span>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningModules;