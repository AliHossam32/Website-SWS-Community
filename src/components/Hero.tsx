import React from 'react';
import { ArrowRight, Play, Star, Users, Trophy, BookOpen, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Trusted by 100+ students</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master STEM Skills &
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> Win Scholarships</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Join the premier educational community for SWS students. Master English proficiency, 
                programming skills, and build competition-ready projects while preparing for international 
                university scholarships with expert guidance and peer support.
              </p>
            </div>

            {/* Scholarship Highlight */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">International Scholarship Ready</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Targeted training and application guidance to qualify for prestigious university scholarships worldwide
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg" onClick={() => window.location.href = '#call-to-action'}>
                <span className="font-semibold">Start Learning Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 transform hover:scale-105 shadow-md">
                <Play className="w-5 h-5" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-2 mx-auto">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1+</div>
                <div className="text-sm text-gray-600">Scholarships Won</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-2 mx-auto">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1+</div>
                <div className="text-sm text-gray-600">Competition Wins</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Your Learning Dashboard</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Scholarship Prep</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-14"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Technical Writing</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full w-10"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Project Building</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-8"></div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Next Deadline:</span>
                    <span className="font-semibold text-emerald-600">MIT Scholarship</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;