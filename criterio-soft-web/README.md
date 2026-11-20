# CRITERIO SOFT — sitio web corporativo

Sitio web corporativo de una sola página (SPA) desarrollado con React, TypeScript y Vite. Diseño adaptable, estética tecnológica futurista y paleta morada.

## Requisitos
- Node.js 20 o superior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal (normalmente http://localhost:5173).

## Compilar para producción

```bash
npm run build
npm run preview
```

El sitio compilado queda en `dist/`.

## Configuración de contacto

1. Copia `.env.example` y renómbralo a `.env`.
2. Define `VITE_WHATSAPP_NUMBER` con el número comercial en formato internacional, solo dígitos y sin `+`.
3. Opcionalmente define `VITE_CONTACT_EMAIL`.
4. Reinicia el servidor de desarrollo después de modificar `.env`.

Si WhatsApp no está configurado, los botones de contacto llevan al formulario y el formulario informa que se debe configurar el canal comercial antes de enviar. No se inventa ningún número ni dirección de correo.

## Personalizar precios y servicios

Los textos y precios se encuentran en `src/data.ts`. Actualiza esos datos antes de publicar si cambian las tarifas o el alcance comercial.

## Publicar y conectar con Lovable

- El proyecto usa una estructura estándar de Vite + React + TypeScript, compatible con un flujo de importación mediante GitHub.
- Sube el contenido de esta carpeta a un repositorio GitHub.
- En Lovable, importa o conecta el repositorio según las opciones disponibles en tu cuenta.
- El sitio actual es frontend estático: no necesita Supabase para funcionar. Si más adelante se agrega un panel administrativo, autenticación o almacenamiento de solicitudes, se puede conectar un proyecto Supabase externo independiente.

## Estructura

```text
src/
  components/
    Header.tsx
    Footer.tsx
    SectionHeading.tsx
  App.tsx
  data.ts
  main.tsx
  styles.css
```

## Alcance actual
- Navegación responsive.
- Secciones de servicios, proceso, planes de fabricación, alojamiento, mantenimiento, preguntas frecuentes y contacto.
- Formulario de solicitud con validación básica del navegador.
- Enlaces a WhatsApp cuando se configura el número.
- Sin backend, base de datos, analítica ni dependencias de Lovable Cloud.
