import { useState } from 'react'

const faqs = [
  {
    question: "How quickly can AllTech source equipment?",
    answer: "Depending on the equipment type and location, we usually source within 2-4 weeks."
  },
  {
    question: "Do you handle international shipping?",
    answer: "Yes! We manage end-to-end logistics, including customs and delivery to your site."
  },
  {
    question: "Can you handle large-scale projects?",
    answer: "Absolutely. We’ve managed projects ranging from $100K to over $7M worldwide."
  },
  {
    question: "Do I need to visit your office?",
    answer: "Not necessary. We communicate fully online and provide regular updates until delivery."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#003366] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Answers to the questions we get asked most often by our clients.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="border rounded-lg bg-white shadow-sm"
          >
           <button
  onClick={() => toggle(i)}
  className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center text-[#003366] focus:outline-none"
>
  {faq.question}
  <span className="text-2xl font-bold">{openIndex === i ? '-' : '+'}</span>
</button>

            {openIndex === i && (
              <div className="px-6 py-4 text-slate-600 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
