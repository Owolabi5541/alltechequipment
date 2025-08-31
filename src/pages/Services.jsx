import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Globe, TrendingUp, Settings, ArrowRight, Check, Sparkles, Zap, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: "Heavy Machinery Brokerage",
    icon: Settings,
    gradient: "from-blue-600 to-cyan-500",
    points: [
      "Vendor shortlisting and negotiations",
      "Pre-shipment inspection coordination",
      "Contracts & documentation"
    ],
    stats: "500+ Deals Closed"
  },
  {
    id: 2,
    title: "International Sourcing & Procurement",
    icon: Globe,
    gradient: "from-purple-600 to-pink-500",
    points: [
      "Global supplier discovery",
      "Quality verification",
      "Currency & payments advisory"
    ],
    stats: "50+ Countries"
  },
  {
    id: 3,
    title: "Project Management & Logistics",
    icon: TrendingUp,
    gradient: "from-green-600 to-teal-500",
    points: [
      "Freight, customs & inland delivery",
      "Timeline & budget tracking",
      "Handover & commissioning coordination"
    ],
    stats: "99% On-Time"
  },
  {
    id: 4,
    title: "Advisory Services",
    icon: Shield,
    gradient: "from-orange-600 to-red-500",
    points: [
      "Feasibility and equipment matching",
      "Cost of ownership analysis",
      "Risk & compliance guidance"
    ],
    stats: "$50M+ Saved"
  }
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;
  
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur transition-all duration-500`} />
      
      <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, transparent 20%, rgba(255,255,255,0.3) 20.5%, rgba(255,255,255,0.3) 21%, transparent 21.5%)`,
            backgroundSize: '20px 20px',
            animation: 'drift 20s linear infinite'
          }} />
        </div>
        
        <div className="relative p-8">
          {/* Icon with animated background */}
          <div className="relative mb-6">
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
            <div className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Title and stats */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
              {service.title}
            </h3>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-l font-semibold text-gray-600">{service.stats}</span>
            </div>
          </div>
          
          {/* Points with animated checkmarks */}
          <ul className="space-y-3 mb-6">
            {service.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0 transform transition-all duration-300`}
                     style={{
                       transform: isHovered ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)',
                       transitionDelay: `${i * 50}ms`
                     }}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-l leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          
          {/* Learn more link */}
        <a href="/contact">
  <button className="group/btn flex items-center gap-2 text-l font-semibold text-gray-900 hover:text-[#003366] transition-colors duration-300">
    <span>Contact Us</span>
    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
  </button>
</a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>
      
      {/* Cursor glow effect */}
      <div 
        className="pointer-events-none fixed w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'transform 0.2s ease-out',
          transform: 'translate(0, 0)',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 text-l font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Enterprise-Grade Solutions</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Our Services
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming global heavy machinery procurement with cutting-edge solutions 
            that deliver measurable results and exceptional value.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-3xl opacity-20" />
          <div className="relative bg-gradient-to-r from-[#003366] to-blue-700 rounded-3xl p-12 text-center overflow-hidden">
            {/* Animated pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                animation: 'pulse 4s ease-in-out infinite'
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-l font-semibold mb-6">
                <Award className="w-4 h-4" />
                <span>Trusted by 100+ Global Enterprises</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join industry leaders who trust us to deliver excellence in heavy machinery procurement and logistics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
             < Link to="/contact">
  <button className="group px-8 py-4 bg-white text-[#003366] font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
    <span>Get Started Today</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</Link>

<Link to="/contact">
  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
    <Users className="w-5 h-5" />
    <span>Schedule Consultation</span>
  </button>
</Link>

              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-l">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-l">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-l">Global Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes drift {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(20px, 20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Services;