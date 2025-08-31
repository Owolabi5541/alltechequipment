
export default function Card({ title, children, icon }) {
  return (
    <div className="card h-full">
      <div className="flex items-start gap-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="mt-3 text-l text-slate-600">{children}</div>
    </div>
  )
}
