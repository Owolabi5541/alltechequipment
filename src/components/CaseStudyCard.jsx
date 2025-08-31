"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function CaseStudyCard({ title, summary, details, client, year, outcome, tags = [], image }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article 
      whileHover={{ scale: 1.02 }}
      className="bg-white/70 backdrop-blur-xl shadow-md hover:shadow-xl 
                 transition-all rounded-2xl overflow-hidden border border-slate-200"
    >
      {/* Project image (separate visual layer, not overriding glass background) */}
      {image && (
        <div className="relative w-full h-52 md:h-60">
          <img 
            src={image} 
            alt={title} 
            loading="lazy" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <h3 className="absolute bottom-3 left-4 text-xl font-semibold text-white drop-shadow-md">
            {title}
          </h3>
        </div>
      )}

      {/* Glassmorphic card body */}
      <div className="p-6">
        <p className="mt-1 text-slate-700">{summary}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span 
              key={t} 
              className="px-3 py-1 text-xs font-medium 
                         bg-slate-100/80 backdrop-blur-sm text-slate-700 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 flex items-center gap-1 text-sm font-medium text-[#003366] hover:text-blue-700"
        >
          {open ? "Show less" : "Show more"}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Expandable Section */}
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-slate-700 space-y-2"
          >
            <p><span className="font-semibold">Client:</span> {client}</p>
            <p><span className="font-semibold">Year:</span> {year}</p>
            <p><span className="font-semibold">Outcome:</span> {outcome}</p>
            <p className="leading-relaxed">{details}</p>
          </motion.div>
        )}
      </div>
    </motion.article>
  )
}
