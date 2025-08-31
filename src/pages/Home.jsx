import { useState, useEffect, useRef } from 'react'
import { CheckCircle, Globe, Truck, Shield } from 'lucide-react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import CTAButtons from '../components/CTAButtons'
import FAQSection from '../components/FAQSection'

export default function Home() {
  const [sectionsVisible, setSectionsVisible] = useState({
    process: false,
    benefits: false
  })
  const [processStep, setProcessStep] = useState(0)
  const processRef = useRef(null)
  const benefitsRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // ensures it triggers earlier (50% in view)
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === processRef.current) {
            setSectionsVisible(prev => ({ ...prev, process: true }))
          } else if (entry.target === benefitsRef.current) {
            setSectionsVisible(prev => ({ ...prev, benefits: true }))
          }
        }
      })
    }, observerOptions)

    if (processRef.current) observer.observe(processRef.current)
    if (benefitsRef.current) observer.observe(benefitsRef.current)

    let processTimer
    if (sectionsVisible.process) {
      processTimer = setInterval(() => {
        setProcessStep(prev => (prev + 1) % 3)
      }, 1000) // Increased interval for better user experience
    }

    return () => {
      observer.disconnect()
      if (processTimer) clearInterval(processTimer)
    }
  }, [sectionsVisible.process])

  const processSteps = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to trusted manufacturers and dealers worldwide, ensuring quality and availability.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Truck,
      title: "End-to-End Management",
      description: "We handle sourcing, inspection, shipping, and delivery—so you don't have to.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "Clear steps, documentation, and pricing at every stage.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ]

  const benefits = [
    "Bulk orders for excavators, generators, and transformers",
    "Pre-shipment inspections with reports",
    "Freight & customs coordination",
    "On-site delivery and handover"
  ]

  return (
    // Wrap the entire page in a main tag with overflow-x-hidden
    <main className="overflow-x-hidden">
      <Hero />

      <Section>
        <div ref={processRef} className="text-center mb-12">
          <h2 className={`h2 transition-all duration-1000 ease-out transform ${
            sectionsVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            How We Work
          </h2>
          <p className={`muted mt-3 transition-all duration-1000 ease-out transform delay-200 ${
            sectionsVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Our proven three-step process ensures seamless procurement
          </p>
        </div>

        {/* Interactive Process Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid gap-8 md:grid-cols-3 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isActive = processStep === index
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ease-out transform ${
                    sectionsVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                  role="article"
                  aria-labelledby={`step-${index}-title`}
                >
                  {/* Step Number Circle */}
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                    isActive ? step.bgColor + ' scale-110 shadow-lg' : 'bg-slate-100'
                  }`}>
                    <Icon className={`w-8 h-8 transition-colors duration-500 ${
                      isActive ? step.color : 'text-slate-400'
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center px-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 transition-all duration-500 ${
                      isActive ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      0{index + 1}
                    </div>
                    <h3 id={`step-${index}-title`} className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
                      isActive ? 'text-brand-primary' : 'text-slate-700'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-l leading-relaxed transition-colors duration-500 ${
                      isActive ? 'text-slate-700' : 'text-slate-500'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Active Indicator */}
                  <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-500 ${
                    isActive ? 'bg-brand-primary scale-100' : 'bg-transparent scale-0'
                  }`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section >
        <div className="grid items-center gap-12 md:grid-cols-2 ">
          <div ref={benefitsRef}
            className={`transition-all duration-1000 ease-out transform ${
              sectionsVisible.benefits ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h2 className="h2">Built for serious buyers who value reliability</h2>
            <p className="muted mt-3">
              From single units to bulk orders, we tailor procurement to your timelines and budget.
            </p>
            <div className="mt-6">
              <CTAButtons />
            </div>
          </div>
          
          {/* Benefits List with Icons */}
          <div className={`transition-all duration-1000 ease-out transform ${
            sectionsVisible.benefits ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
          role="list"
          aria-label="Service benefits">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-brand-primary/5 to-transparent border border-brand-primary/10 hover:border-brand-primary/20 transition-all duration-300 ease-out transform hover:translate-x-2 hover:shadow-l ${
                    sectionsVisible.benefits ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${700 + index * 150}ms` }}
                  role="listitem"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-brand-primary" />
                  </div>
                  <p className="text-l leading-relaxed text-slate-700 font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

       <FAQSection />
    </main>
  )
}