import React from 'react';
import { MessageSquare, Users, Calendar, Video, Award, TrendingUp, UserCheck, Zap } from 'lucide-react';

const Community = () => {
  const communityFeatures = [
    {
      icon: MessageSquare,
      title: 'Discussion Forums',
      description: 'Get help, share ideas, and collaborate with peers on projects and assignments.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Join or create study groups for specific subjects, competitions, or skill levels.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Video,
      title: 'Live Events',
      description: 'Attend webinars, coding challenges, and virtual competitions with experts.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Earn badges, certificates, and recognition for your learning milestones.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Active Members', value: '1+', icon: Users },
    { label: 'Daily Discussions', value: '1+', icon: MessageSquare },
    { label: 'Live Events/Month', value: '1+', icon: Calendar },
    { label: 'Success Rate', value: '94%', icon: TrendingUp }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join a Thriving SWS Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with like-minded students, participate in discussions, and accelerate your learning 
            through collaborative experiences and peer support.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {communityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Community Highlights */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real-Time Collaboration & Support
              </h3>
              <p className="text-gray-600 mb-6">
                Experience the power of community-driven learning with instant help, peer reviews, 
                and collaborative project development.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <UserCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Expert mentors available 24/7</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Instant feedback on code and projects</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Gamified learning with rewards</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Recent Activity</h4>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-sm">Sarah shared a Python project</div>
                      <div className="text-xs opacity-75">2 minutes ago</div>
                    </div>
                    
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-sm">New competition announced!</div>
                      <div className="text-xs opacity-75">5 minutes ago</div>
                    </div>
                    
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-sm">Mike answered your question</div>
                      <div className="text-xs opacity-75">8 minutes ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;