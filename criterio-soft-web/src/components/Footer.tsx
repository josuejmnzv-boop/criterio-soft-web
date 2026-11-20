export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark"><span /></span>
            <span className="brand-name">CRITERIO<span>SOFT</span></span>
          </a>
          <p>Tecnología con criterio.<br />Soluciones digitales para avanzar.</p>
        </div>
        <div className="footer-links">
          <a href="#servicios">Servicios</a>
          <a href="#precios">Fabricación</a>
          <a href="#alojamiento">Alojamiento</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CRITERIO SOFT. Todos los derechos reservados.</span>
        <span>Desarrollo web · Sistemas · Plataformas</span>
      </div>
    </footer>
  )
}
