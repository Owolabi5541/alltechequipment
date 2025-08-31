import Section from '../components/Section'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/testimonials'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Testimonials() {
  return (
    <Section>
      <h1 className="h1 text-center">What Clients Say</h1>
      <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
        Hear directly from our partners about their experience working with AllTech.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003366]">
          Ready to Work With Us?
        </h2>
        <p className="text-lg text-slate-600 mb-6">
          Let’s discuss your equipment needs and how AllTech can help you source the best machinery worldwide.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-[#003366] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
        >
          Get a Quote
          <ChevronRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </Section>
  )
}
