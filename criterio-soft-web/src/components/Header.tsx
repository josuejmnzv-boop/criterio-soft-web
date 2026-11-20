import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  ['Servicios', '#servicios'],
  ['Precios', '#precios'],
  ['Alojamiento', '#alojamiento'],
  ['Nosotros', '#nosotros'],
  ['Contacto', '#contacto'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#inicio" aria-label="CRITERIO SOFT inicio">
          <span className="brand-mark"><span /></span>
          <span className="brand-name">CRITERIO<span>SOFT</span></span>
        </a>
        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta mobile-cta" href="#contacto" onClick={() => setOpen(false)}>Solicitar propuesta <ArrowUpRight size={16} /></a>
        </nav>
        <a className="nav-cta desktop-cta" href="#contacto">Hablemos <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
