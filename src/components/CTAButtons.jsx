
import { Link } from 'react-router-dom'

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
      <Link to="/contact" className="btn btn-outline">Contact Us</Link>
    </div>
  )
}
