import Section from '../components/Section'
import CaseStudyCard from '../components/CaseStudyCard'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <Section className="relative bg-gray-50">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/heavy-machinery-used-construction-industry-engineering-min.jpg')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="h1">Projects & Case Studies</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Explore some of our successful equipment brokerage projects, from heavy-duty excavators 
          to industrial power systems. Each case study reflects our global reach, transparent process, 
          and proven track record.
        </p>
           <div className="flex justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-2xl font-semibold bg-white text-[#003366] hover:bg-slate-200 transition"
            >
              Request a Quote
            </Link>
           
          </div>
      </motion.div>

      {/* Grid */}
      <div className="relative z-10 mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CaseStudyCard {...p} />
          </motion.div>
        ))}
      </div>

            {/* Work With Us Section */}
      <Section className="relative bg-[#003366] text-white py-16 mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Work With Us</h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Partner with <span className="font-semibold">AllTech Equipment Brokerage</span> to simplify 
            your heavy machinery procurement. We bring global connections, transparent processes, and 
            end-to-end project management—so you can focus on building, not sourcing.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-2xl font-semibold bg-white text-[#003366] hover:bg-slate-200 transition"
            >
              Contact Us
            </Link>
           
          </div>
        </div>
      </Section>

    </Section>
  )
}
