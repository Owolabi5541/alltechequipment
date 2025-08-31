
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-[#003366] text-[#D2D7D3]">
      <div className="container-px mx-auto grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">AllTech Equipment Brokerage</div>
          <p className="mt-2 text-l">Connecting You to Heavy Machinery Worldwide.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-l">
          <div className="space-y-2">
            <div className="font-medium text-[#fff]">Company</div>
            <ul className="space-y-1">
              <li><Link className="hover:underline" to="/about">About</Link></li>
              <li><Link className="hover:underline" to="/services">Services</Link></li>
              <li><Link className="hover:underline" to="/projects">Projects</Link></li>
              <li><Link className="hover:underline" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-[#fff]">Legal</div>
            <ul className="space-y-1">
              <li><a className="hover:underline" href="#">Terms</a></li>
              <li><a className="hover:underline" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-l text-[#D2D7D3] space-y-1">
  <div>
    Phone: <a href="tel:+19373426715" className="underline hover:text-white">+19373426715</a>
  </div>
  <div>
    Email: <a href="mailto:contact@alltechequipment.com" className="underline hover:text-white">contact@alltechequipment.com</a>
  </div>
  <div>
    LinkedIn: <a href="https://www.linkedin.com/company/alltech-brokerage" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">/company/alltech-brokerage</a>
  </div>
</div>

      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-[#D2D7D3]">
        © {year} AllTech Equipment Brokerage. All rights reserved.
      </div>
    </footer>
  )
}
