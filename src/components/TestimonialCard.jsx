// components/TestimonialCard.jsx
export default function TestimonialCard({ quote, author, role }) {
  // Extract first letter for avatar
  const avatar = author.split(' ').map(n => n[0]).join('');

  return (
    <figure className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <blockquote className="text-slate-800 text-lg md:text-base lg:text-lg mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center mt-auto">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
          {avatar}
        </div>
        <figcaption className="text-slate-700">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </figcaption>
      </div>
    </figure>
  )
}
