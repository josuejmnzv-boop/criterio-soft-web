export const services = [
  {
    number: '01',
    icon: '◈',
    title: 'Páginas y sitios web',
    description: 'Presencia digital profesional, rápida y adaptable a celulares, diseñada para convertir visitas en consultas.',
    tag: 'Presencia digital',
  },
  {
    number: '02',
    icon: '▦',
    title: 'Tiendas virtuales',
    description: 'Catálogos, carritos y gestión de pedidos para llevar tus productos a más clientes.',
    tag: 'Comercio electrónico',
  },
  {
    number: '03',
    icon: '⌘',
    title: 'Sistemas empresariales',
    description: 'Herramientas a la medida para organizar clientes, ventas, inventario, operaciones y reportes.',
    tag: 'Gestión de negocios',
  },
  {
    number: '04',
    icon: '✳',
    title: 'Plataformas personalizadas',
    description: 'Soluciones digitales con módulos, usuarios, permisos e integraciones adaptadas a tu modelo de negocio.',
    tag: 'Desarrollo a medida',
  },
]

export const buildPlans = [
  {
    name: 'Sitio web inicial',
    price: 'Desde $150',
    description: 'Para profesionales y negocios que necesitan comenzar con una presencia clara en internet.',
    features: ['Diseño adaptable a móviles', 'Secciones informativas esenciales', 'Botón de contacto', 'Configuración de publicación'],
    featured: false,
  },
  {
    name: 'Sistema empresarial',
    price: 'Desde $350',
    description: 'Para negocios que necesitan organizar procesos y administrar información.',
    features: ['Panel de administración', 'Gestión de registros', 'Formularios y búsquedas', 'Estructura preparada para crecer'],
    featured: true,
  },
  {
    name: 'Plataforma a medida',
    price: 'Desde $800',
    description: 'Para proyectos con procesos propios, módulos e interacción entre distintos tipos de usuario.',
    features: ['Análisis de requerimientos', 'Módulos personalizados', 'Roles y permisos según alcance', 'Integraciones según cotización'],
    featured: false,
  },
]

export const hostingPlans = [
  { name: 'Básico', price: '$5', detail: 'mensuales', description: 'Para páginas informativas ligeras.', features: ['Alojamiento web', 'Certificado SSL', 'Conexión de dominio del cliente'] },
  { name: 'Empresarial', price: '$10', detail: 'mensuales', description: 'Para sitios empresariales y páginas dinámicas.', features: ['Todo lo del plan Básico', 'Supervisión básica', 'Respaldos según configuración'] },
  { name: 'Profesional', price: '$20', detail: 'mensuales', description: 'Para sitios con mayor actividad y contenido.', features: ['Recursos ampliados según proveedor', 'Supervisión básica', 'Soporte de alojamiento'] },
  { name: 'Aplicación', price: '$35', detail: 'mensuales', description: 'Para aplicaciones web con backend.', features: ['Alojamiento de aplicación', 'Revisión operativa básica', 'Coordinación de servicios backend'] },
  { name: 'Plataforma', price: 'Desde $60', detail: 'mensuales', description: 'Para soluciones con varios módulos o mayor demanda.', features: ['Evaluación de recursos', 'Supervisión acordada', 'Plan según consumo y arquitectura'] },
]

export const maintenancePlans = [
  { name: 'Esencial', price: '$15', features: ['Revisión básica de disponibilidad', 'Actualizaciones menores compatibles', 'Atención de incidencias básicas'] },
  { name: 'Empresarial', price: '$25', features: ['Todo lo del plan Esencial', 'Revisión periódica', 'Respaldos y comprobación según configuración'] },
  { name: 'Avanzado', price: 'Desde $50', features: ['Supervisión ampliada', 'Soporte prioritario acordado', 'Mantenimiento según complejidad'] },
]

export const faqs = [
  { question: '¿El precio de fabricación incluye el alojamiento?', answer: 'No. El desarrollo se cotiza por proyecto y el alojamiento se contrata por separado. Así sabes cuánto cuesta crear tu solución y cuánto cuesta mantenerla publicada.' },
  { question: '¿El dominio está incluido?', answer: 'El registro y renovación del dominio se cotizan por separado. Recomendamos que el dominio quede registrado a nombre del cliente.' },
  { question: '¿Puedo solicitar cambios después de la entrega?', answer: 'Sí. Los ajustes incluidos se definen en la propuesta del proyecto. Nuevas funciones, módulos o cambios de alcance se cotizan por separado.' },
  { question: '¿Quién es dueño de mis datos?', answer: 'Tus datos pertenecen a tu negocio. La arquitectura, accesos, respaldos y responsabilidades de infraestructura se definen claramente en cada proyecto.' },
  { question: '¿Trabajan con sistemas personalizados?', answer: 'Sí. Evaluamos el proceso de tu negocio y proponemos una solución con el alcance, etapas y precio definidos antes de comenzar.' },
]
