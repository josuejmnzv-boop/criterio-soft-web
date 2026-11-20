import { useState, type FormEvent } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Database,
  Globe2, Layers3, Menu, MessageCircle, MonitorSmartphone, ShieldCheck,
  Sparkles, Workflow, Zap
} from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionHeading from './components/SectionHeading'
import { services, buildPlans, hostingPlans, maintenancePlans, faqs } from './data'

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL as string | undefined

function whatsappLink(message: string) {
  return whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}` : '#contacto'
}

function App() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [formStatus, setFormStatus] = useState('')
  const [selectedService, setSelectedService] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const business = String(form.get('business') || '').trim()
    const email = String(form.get('email') || '').trim()
    const service = String(form.get('service') || '').trim()
    const details = String(form.get('details') || '').trim()
    const message = `Hola, soy ${name}${business ? ` de ${business}` : ''}. Me interesa: ${service}. Correo: ${email}. Detalles: ${details}`
    if (whatsappNumber) {
      window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
      setFormStatus('Se abrió WhatsApp con tu solicitud preparada. Envíala para completar el contacto.')
    } else if (contactEmail) {
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent('Nueva solicitud - CRITERIO SOFT')}&body=${encodeURIComponent(message)}`
      setFormStatus('Se abrió tu aplicación de correo con la solicitud preparada.')
    } else {
      setFormStatus('El formulario está listo, pero falta configurar el WhatsApp o correo comercial en el archivo .env antes de recibir solicitudes.')
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" />
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="status-pill"><span className="pulse" /> ESTUDIO DE DESARROLLO DIGITAL</div>
              <h1>Tu negocio merece<br />una <span className="gradient-text">mejor tecnología.</span></h1>
              <p className="hero-lead">Creamos páginas web, sistemas empresariales y plataformas digitales que convierten ideas en herramientas reales para hacer crecer tu negocio.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">Hablemos de tu proyecto <ArrowUpRight size={18} /></a>
                <a className="button button-ghost" href="#servicios">Explorar servicios <ArrowDown size={17} /></a>
              </div>
              <div className="hero-proof">
                <div className="proof-icon"><ShieldCheck size={19} /></div>
                <span>Desarrollo a medida · Atención directa · Costos claros</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="Ilustración abstracta de tecnología digital">
              <div className="visual-ring ring-a" /><div className="visual-ring ring-b" />
              <div className="visual-core"><span className="core-symbol">C<span>.</span></span><span className="core-caption">DIGITAL ENGINE</span></div>
              <div className="floating-card card-code"><div className="card-top"><span /><span /><span /></div><div className="code-line long" /><div className="code-line medium" /><div className="code-line short" /><div className="code-line medium" /></div>
              <div className="floating-card card-data"><Database size={17} /><div><b>DATA</b><small>Conectada</small></div><span className="data-dot" /></div>
              <div className="floating-card card-ai"><Sparkles size={16} /><span>Ideas → Soluciones</span></div>
              <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">✳</div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>DISEÑAMOS</span><i /><span>DESARROLLAMOS</span><i /><span>IMPULSAMOS</span>
            <a href="#servicios" aria-label="Ver servicios"><ArrowDown size={18} /></a>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>TECNOLOGÍA PARA NEGOCIOS QUE QUIEREN AVANZAR</span>
            <div><Code2 /> Código moderno</div><div><MonitorSmartphone /> Diseño adaptable</div><div><Layers3 /> Soluciones escalables</div>
          </div>
        </section>

        <section className="section services-section" id="servicios">
          <div className="container">
            <SectionHeading eyebrow="LO QUE HACEMOS" title="Tecnología útil. Resultados concretos." description="Desde una presencia profesional en internet hasta sistemas que ordenan y automatizan la operación de tu empresa." />
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top"><span className="service-number">{service.number}</span><span className="service-icon">{service.icon}</span></div>
                  <span className="service-tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contacto" onClick={() => setSelectedService(service.title)}>Cotizar servicio <ArrowUpRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach-section" id="nosotros">
          <div className="container approach-layout">
            <div className="approach-copy">
              <SectionHeading eyebrow="NUESTRA FORMA DE TRABAJAR" title="No desarrollamos por desarrollar." description="Primero entendemos cómo funciona tu negocio. Después diseñamos la solución adecuada, con alcance claro y una ruta de crecimiento." />
              <a className="text-link" href="#contacto">Cuéntanos qué necesitas <ArrowUpRight size={17} /></a>
            </div>
            <div className="approach-steps">
              <div className="approach-step"><span>01</span><div><h3>Entendemos</h3><p>Conocemos tus objetivos, procesos y necesidades reales.</p></div><Workflow /></div>
              <div className="approach-step"><span>02</span><div><h3>Diseñamos</h3><p>Definimos la experiencia, las funciones y el alcance del proyecto.</p></div><Layers3 /></div>
              <div className="approach-step"><span>03</span><div><h3>Desarrollamos</h3><p>Construimos, probamos y preparamos tu solución para operar.</p></div><Code2 /></div>
              <div className="approach-step"><span>04</span><div><h3>Te acompañamos</h3><p>Ofrecemos alojamiento y mantenimiento según lo que necesites.</p></div><Zap /></div>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="precios">
          <div className="container">
            <SectionHeading eyebrow="INVERSIÓN EN DESARROLLO" title="Una solución para cada etapa." description="Precios iniciales de referencia. Cada proyecto se confirma después de revisar sus funciones, complejidad y alcance." centered />
            <div className="pricing-grid build-grid">
              {buildPlans.map((plan) => (
                <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                  {plan.featured && <span className="popular-label">MÁS SOLICITADO</span>}
                  <h3>{plan.name}</h3><p className="price-description">{plan.description}</p>
                  <div className="price">{plan.price}</div>
                  <span className="price-note">Pago por proyecto</span>
                  <div className="card-divider" />
                  <ul>{plan.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
                  <a className={`button ${plan.featured ? 'button-primary' : 'button-outline'}`} href={whatsappLink(`Hola, deseo cotizar el servicio: ${plan.name}.`)} onClick={() => { if (!whatsappNumber) setSelectedService(plan.name) }}>Solicitar cotización <ArrowUpRight size={16} /></a>
                </article>
              ))}
            </div>
            <p className="pricing-footnote">Los precios “desde” no constituyen una cotización final. Funciones adicionales, integraciones, licencias, dominio y servicios de terceros se presupuestan por separado.</p>
          </div>
        </section>

        <section className="section hosting-section" id="alojamiento">
          <div className="container">
            <SectionHeading eyebrow="SERVICIO RECURRENTE" title="Tu proyecto en línea. Siempre disponible." description="Planes mensuales de alojamiento para mantener tu sitio o aplicación publicado. El plan definitivo depende de los recursos que requiera cada proyecto." centered />
            <div className="hosting-grid">
              {hostingPlans.map((plan, index) => (
                <article className={`hosting-card ${index === 2 ? 'hosting-highlight' : ''}`} key={plan.name}>
                  <div className="hosting-head"><span>{plan.name}</span><Globe2 size={18} /></div>
                  <div className="hosting-price">{plan.price}<small> / {plan.detail}</small></div>
                  <p>{plan.description}</p>
                  <ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
                  <a href={whatsappLink(`Hola, deseo información del alojamiento ${plan.name} de CRITERIO SOFT.`)} onClick={() => { if (!whatsappNumber) setSelectedService(`Alojamiento ${plan.name}`) }}>Consultar plan <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
            <div className="hosting-note"><ShieldCheck size={20} /><p><b>Transparencia desde el inicio.</b> El dominio, correo, bases de datos de pago, consumo de IA y otros servicios externos no están incluidos salvo que la propuesta lo indique expresamente.</p></div>
          </div>
        </section>

        <section className="section maintenance-section">
          <div className="container maintenance-layout">
            <div>
              <SectionHeading eyebrow="CUIDAMOS TU INVERSIÓN" title="El trabajo no termina al publicar." description="El mantenimiento ayuda a conservar la estabilidad y seguridad de tu solución digital. El alcance se define en el contrato de servicio." />
              <div className="maintenance-callout"><ShieldCheck /><span>Planes claros, tareas definidas y atención según el nivel contratado.</span></div>
            </div>
            <div className="maintenance-list">
              {maintenancePlans.map((plan) => (
                <div className="maintenance-row" key={plan.name}>
                  <div className="maintenance-title"><div><h3>{plan.name}</h3><span>{plan.features.length} servicios incluidos</span></div><strong>{plan.price}<small>/mes</small></strong></div>
                  <ul>{plan.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-layout">
            <div><SectionHeading eyebrow="PREGUNTAS FRECUENTES" title="Hablemos claro desde el principio." description="Respuestas a las dudas más comunes antes de iniciar un proyecto." /></div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className={`faq-item ${faqOpen === index ? 'active' : ''}`} key={faq.question}>
                  <button onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}>
                    <span>{faq.question}</span><ChevronDown size={19} />
                  </button>
                  {faqOpen === index && <p>{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="container contact-layout">
            <div className="contact-copy">
              <span className="eyebrow"><span className="eyebrow-dot" /> CONVERSEMOS</span>
              <h2>Tu próxima idea<br /><span className="gradient-text">puede empezar aquí.</span></h2>
              <p>Cuéntanos qué quieres mejorar, crear o automatizar. Revisaremos tu solicitud para definir el siguiente paso.</p>
              <div className="contact-points"><div><MessageCircle /><span>Atención directa y personalizada</span></div><div><ShieldCheck /><span>Alcance y costos transparentes</span></div><div><Sparkles /><span>Soluciones pensadas para crecer</span></div></div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>INICIEMOS TU PROYECTO</span><p>Completa estos datos y nos pondremos en contacto.</p></div>
              <label>Nombre completo<input name="name" placeholder="¿Cómo te llamas?" required /></label>
              <label>Empresa o negocio <span className="optional">(opcional)</span><input name="business" placeholder="Nombre de tu negocio" /></label>
              <label>Correo electrónico<input name="email" type="email" placeholder="nombre@empresa.com" required /></label>
              <label>¿Qué necesitas?<select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required><option value="">Selecciona un servicio</option><option>Página web</option><option>Tienda virtual</option><option>Sistema empresarial</option><option>Plataforma personalizada</option><option>Alojamiento web</option><option>Mantenimiento</option><option>Otro proyecto</option></select></label>
              <label>Cuéntanos sobre tu proyecto<textarea name="details" rows={4} placeholder="Describe brevemente qué necesitas..." required /></label>
              <button className="button button-primary form-submit" type="submit">Enviar solicitud <ArrowUpRight size={17} /></button>
              {formStatus && <p className="form-status" role="status">{formStatus}</p>}
              <small className="form-privacy">Usaremos estos datos únicamente para responder a tu consulta.</small>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <a className="floating-contact" href={whatsappLink('Hola CRITERIO SOFT, deseo información sobre sus servicios.')} aria-label="Contactar por WhatsApp"><MessageCircle size={22} /><span>Hablemos</span></a>
    </>
  )
}

export default App
