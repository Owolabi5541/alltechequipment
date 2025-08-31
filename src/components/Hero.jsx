import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Shield, TrendingUp, Award, Sparkles, ChevronRight } from 'lucide-react'

// CTAButtons component
const CTAButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Link to="/contact">
        <button className="group relative px-8 py-4 bg-[#003366] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
      <Link to="/projects">
        <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
          View Equipment
          <ChevronRight className="w-5 h-5" />
        </button>
      </Link>
    </div>
  )
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    { title: "Global Network", description: "Verified suppliers across continents.", icon: Globe, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", delay: 500 },
    { title: "End-to-End", description: "Sourcing to delivery & handover.", icon: TrendingUp, color: "from-green-500 to-emerald-500", bgColor: "bg-green-50", delay: 700 },
    { title: "Transparent", description: "Clear pricing & progress updates.", icon: Shield, color: "from-purple-500 to-pink-500", bgColor: "bg-purple-50", delay: 900 },
    { title: "Proven", description: "Past deliveries & case studies.", icon: Award, color: "from-orange-500 to-red-500", bgColor: "bg-orange-50", delay: 1100 }
  ]

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url('/heavy-machinery-used-construction-industry-engineering-min.jpg')` }} // <-- put your image here
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column - Text Content */}
          <div className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-semibold mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Connecting You to Heavy Machinery Worldwide</span>
            </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
  Your Global Partner for{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
    Heavy Machinery
  </span>{" "}
  Sourcing
</h1>


            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              We connect serious buyers with verified suppliers of excavators, generators, transformers,
              and other industrial equipment. With access to a global network of 500+ trusted suppliers
              and a 95% successful deal completion rate, we provide end-to-end management, a transparent
              process, and proven results.
            </p>

            <div className="flex gap-8 mt-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Verified Suppliers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-200">Countries</div>
              </div>
            </div>

            <CTAButtons />
          </div>

          {/* Right Column - Feature Cards */}
          <div className={`transition-all duration-1000 ease-out transform delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div
                      key={index}
                      className={`group relative rounded-2xl ${feature.bgColor} bg-opacity-10 backdrop-blur-sm p-6 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl border border-white/10 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${feature.delay}ms` }}
                    >
                      <div className={`relative w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xl font-semibold text-white mb-2">{feature.title}</div>
                      <p className="text-sm text-blue-100/80">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
