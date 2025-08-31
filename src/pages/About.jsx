import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Globe, Truck, Settings, CheckCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const StaticSection = ({ children, id, className = "", style = {} }) => (
    <div
      id={id}
      className={className}
      style={style}
    >
      {children}
    </div>
  );

  const expertiseItems = [
    { icon: Settings, title: "Heavy Machinery Procurement", desc: "Specialized sourcing of construction equipment, tractors, and industrial machinery" },
    { icon: Globe, title: "International Equipment Sourcing", desc: "Global network for finding the right equipment at competitive prices" },
    { icon: CheckCircle, title: "Contract-Based Operations", desc: "Flexible, results-driven approach with clear deliverables" },
    { icon: Truck, title: "Logistics & Delivery Coordination", desc: "End-to-end handling from procurement to final delivery" }
  ];

  const credentials = [
    "Business license (country-specific)",
    "Industry certifications in heavy machinery dealing",
    "International trade compliance certification",
    "Equipment inspection and quality assurance credentials"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
   <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image with Parallax */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
    style={{
      backgroundImage: `url('tractor-image.jpg')`,
      transform: `translateY(${scrollY * 0.5}px)`,
    }}
  />

  {/* Overlay matching background height */}
  <div className="absolute inset-0 bg-black bg-opacity-60 h-full" />

  {/* Content */}
  <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
    <StaticSection id="hero-content">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        About <span style={{ color: '#D2D7D3' }}>AllTech</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
        Your trusted partner in global heavy machinery procurement and industrial equipment sourcing since 2016
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center group"
          style={{ backgroundColor: '#003366' }}
        >
          Get A Quote Today
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          to="/project"
          className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center"
          style={{ backgroundColor: '#6C7A89' }}
        >
          View Our Projects
        </Link>
      </div>
    </StaticSection>
  </div>
</section>




      {/* Company Overview */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-6xl mx-auto">
          <StaticSection id="company-overview" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#003366' }}>
              Leading the Industry Forward
            </h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#6C7A89' }}>
              AllTech has established itself as a premier international broker in heavy machinery and industrial equipment. 
              Our commitment to excellence and global reach has made us the go-to partner for projects ranging from 
              $100,000 to over $7 million worldwide.
            </p>
          </StaticSection>

          <div className="grid md:grid-cols-3 gap-8">
            <StaticSection id="stat-1" className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#003366' }}>9+</div>
              <div className="text-lg" style={{ color: '#6C7A89' }}>Years of Excellence</div>
            </StaticSection>
            <StaticSection id="stat-2" className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#003366' }}>$7M+</div>
              <div className="text-lg" style={{ color: '#6C7A89' }}>Project Values Handled</div>
            </StaticSection>
            <StaticSection id="stat-3" className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#003366' }}>Global</div>
              <div className="text-lg" style={{ color: '#6C7A89' }}>Delivery Network</div>
            </StaticSection>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <StaticSection id="expertise-header" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#003366' }}>
              Our Expertise
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6C7A89' }}>
              Specialized knowledge and proven track record in heavy machinery procurement and logistics
            </p>
          </StaticSection>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseItems.map((item, index) => (
              <StaticSection 
                key={index}
                id={`expertise-${index}`}
                className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border"
                style={{ borderColor: '#D2D7D3' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#003366' }}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#003366' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#6C7A89' }}>{item.desc}</p>
                  </div>
                </div>
              </StaticSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-6xl mx-auto">
          <StaticSection id="founder-header" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#003366' }}>
              Meet Our Founder
            </h2>
          </StaticSection>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <StaticSection id="founder-image" className="lg:w-1/3">
              <div className="relative">
                <div className="w-80 h-80 rounded-full mx-auto overflow-hidden shadow-2xl" style={{ border: `4px solid #D2D7D3` }}>
                  <img src="alltech ceo.jpg" alt="Gail Waller Hunt - Founder & CEO" className="w-full h-full object-cover" />
                </div>
               <div
  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white font-semibold text-sm md:text-base"
  style={{ backgroundColor: '#003366' }}
>
  Founder & CEO
</div>

              </div>
            </StaticSection>

            <StaticSection id="founder-content" className="lg:w-2/3">
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#003366' }}>Gail Waller Hunt</h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#6C7A89' }}>
                I am an international broker specializing in heavy machinery and industrial equipment. Since 2016, I have handled projects ranging from $100,000 to over $7 million, sourcing and supplying construction machinery, tractors, generators, transformers, and other large-scale equipment for clients globally. I operate fully on a contract basis, delivering both locally and internationally.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-lg" style={{ color: '#003366' }}>Experience</h4>
                  <p style={{ color: '#6C7A89' }}>9+ years in international brokerage</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg" style={{ color: '#003366' }}>Specialization</h4>
                  <p style={{ color: '#6C7A89' }}>Engineering and construction equipments</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg" style={{ color: '#003366' }}>Project Range</h4>
                  <p style={{ color: '#6C7A89' }}>$100K - $7M+ value projects</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg" style={{ color: '#003366' }}>Operation Model</h4>
                  <p style={{ color: '#6C7A89' }}>Contract-based delivery</p>
                </div>
              </div>
            </StaticSection>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <StaticSection id="credentials-header" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#003366' }}>
              Credentials & Legitimacy
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6C7A89' }}>
              Our certifications and credentials ensure you're working with a trusted, legitimate partner
            </p>
          </StaticSection>

          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((credential, index) => (
              <StaticSection 
                key={index}
                id={`credential-${index}`}
                className="flex items-center space-x-4 p-6 rounded-lg border hover:shadow-lg transition-all duration-300"
                style={{ borderColor: '#D2D7D3' }}
              >
                <div className="p-3 rounded-full" style={{ backgroundColor: '#003366' }}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg" style={{ color: '#6C7A89' }}>{credential}</span>
              </StaticSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <StaticSection id="cta-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#003366' }}>
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl mb-8" style={{ color: '#6C7A89' }}>
              Let's discuss how we can help you source the perfect equipment for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
    to="/contact"
    className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center group"
    style={{ backgroundColor: '#003366' }}
  >
    <Mail className="mr-2 w-5 h-5" /> Contact Us Today
    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Link>

  <Link
    to="/contact"
    className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center"
    style={{ backgroundColor: '#6C7A89' }}
  >
    <Phone className="mr-2 w-5 h-5" /> Schedule a Call
  </Link>
            </div>
          </StaticSection>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6" style={{ backgroundColor: '#003366' }}>
        <div className="max-w-6xl mx-auto">
          <StaticSection id="trust-indicators" className="text-center">
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="opacity-90">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="opacity-90">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Licensed</div>
                <div className="opacity-90">& Certified</div>
              </div>
            </div>
          </StaticSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;