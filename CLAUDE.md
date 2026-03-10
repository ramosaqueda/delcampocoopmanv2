# Del Campo Coopman - Documentación del Proyecto

## Descripción
Landing page profesional para **Del Campo Coopman**, firma legal especializada en compliance corporativo, litigación penal económica y derecho civil. Sitio estático con CMS headless integrado.

## Stack Tecnológico
- **Framework**: Astro 5.16.6 (SSG)
- **Estilos**: Tailwind CSS 3.4.19
- **CMS**: Decap CMS (Netlify CMS)
- **Hosting**: Netlify (configurado)
- **Tipografía**: Manrope (sans), Cinzel (serif)
- **Iconos**: Material Symbols

## Estructura del Proyecto
```
src/
├── components/          # Componentes Astro
│   ├── Header.astro     # Navegación principal (fixed)
│   ├── Hero.astro       # Sección hero con CTA
│   ├── Founder.astro    # Perfil de Gabriela del Campo
│   ├── About.astro      # Equipo de trabajo
│   ├── Services.astro   # Áreas de práctica (3 servicios)
│   ├── Insights.astro   # Blog + Canal de denuncias
│   ├── Clients.astro    # Testimonios + logos
│   ├── Contact.astro    # Formulario de contacto
│   └── Footer.astro     # Pie de página
├── content/             # Colecciones CMS
│   ├── config.ts        # Esquemas Zod
│   ├── insights/        # Artículos legales (.md)
│   ├── testimonials/    # Testimonios (.md)
│   └── clients/         # Logos clientes (.md)
├── layouts/
│   └── Layout.astro     # Template base HTML
├── pages/
│   ├── index.astro      # Landing principal
│   └── insights/
│       └── [...slug].astro  # Páginas dinámicas de artículos
└── styles/
    └── global.css       # Estilos globales + Tailwind
```

## Colores Corporativos
```css
primary: #d4a411         /* Dorado corporativo */
primary-hover: #b0880e   /* Dorado oscuro */
background-dark: #012340 /* Azul corporativo */
surface-dark: #022c50    /* Azul tarjetas */
secondary-blue: #0f3460  /* Azul secundario */
```

## Comandos
```bash
npm run dev      # Servidor desarrollo (localhost:4321)
npm run build    # Build producción → /dist
npm run preview  # Preview del build
```

## CMS Admin
- **URL local**: http://localhost:4321/admin
- **Backend**: Git Gateway (requiere Netlify Identity)
- **Colecciones**: insights, testimonials, clients

## Convenciones de Código
- Componentes en PascalCase: `Header.astro`
- IDs de sección en kebab-case para anchors: `id="services"`
- Clases Tailwind en orden: layout → spacing → typography → colors → effects
- Usar `glass-panel` para efectos de vidrio
- Usar `text-glow` para resplandor en textos destacados

## Navegación por Anchors
```
#services  → Servicios
#founder   → Fundadora
#about     → Nuestro Equipo
#insights  → Insights
#contact   → Contacto
#clients   → Clientes (opcional)
```

## Formulario de Contacto
- Integrado con Netlify Forms
- Campos: name, email, company (opcional), message
- Nombre del form: "contact"

## Información de Contacto
- **Dirección**: Huanhuali 565, La Serena
- **Teléfono**: +56 9 9768 4860
- **Email**: contacto@delcampocoopman.cl
- **WhatsApp**: +56997684860

## Notas de Desarrollo
- El menú mobile usa JavaScript vanilla (no framework)
- Las animaciones de scroll usan IntersectionObserver
- Imágenes de clientes en `/public/images/logos/`
- El año del copyright debe actualizarse dinámicamente

## Deploy y Configuración CMS

### 1. Deploy en Netlify

1. Conectar repositorio en [Netlify](https://app.netlify.com)
2. Configuración de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

### 2. Configurar Netlify Identity

1. Ir a **Site settings > Identity**
2. Click en **Enable Identity**
3. En **Registration preferences**: seleccionar **Invite only**
4. En **External providers** (opcional): añadir Google, GitHub, etc.
5. En **Services > Git Gateway**: Click **Enable Git Gateway**

### 3. Invitar Usuarios al CMS

1. Ir a **Identity > Invite users**
2. Ingresar email del administrador
3. El usuario recibirá email para crear contraseña
4. Acceder al CMS en: `https://tu-sitio.netlify.app/admin`

### 4. Desarrollo Local con CMS

Para usar el CMS en desarrollo local:

```bash
# Terminal 1: Servidor de desarrollo
npm run dev

# Terminal 2: Backend local del CMS
npx decap-server
```

Luego acceder a `http://localhost:4321/admin`

### 5. Colecciones del CMS

| Colección | Descripción | Campos principales |
|-----------|-------------|-------------------|
| **Insights** | Artículos del blog | título, fecha, categoría, descripción, contenido |
| **Testimonios** | Testimonios de clientes | autor, cargo, testimonio, foto, destacado |
| **Clientes** | Logos para carrusel | nombre, logo, sitio web, orden |
| **Equipo** | Miembros del equipo | nombre, cargo, foto, bio, email, LinkedIn |
| **Configuración** | Settings del sitio | datos de contacto, redes sociales |

### 6. Estructura de Archivos CMS

```
src/content/
├── insights/           # Artículos (.md)
├── testimonials/       # Testimonios (.md)
├── clients/            # Clientes (.md)
├── team/               # Equipo (.md)
├── settings/
│   ├── general.json    # Configuración general
│   └── social.json     # Redes sociales
└── config.ts           # Esquemas Zod
```

### 7. Variables de Entorno (Opcional)

Crear `.env` para desarrollo local:
```bash
# No necesario para Netlify Identity (usa Git Gateway)
# Solo si usas backends alternativos
```

## Troubleshooting CMS

| Problema | Solución |
|----------|----------|
| "Unable to connect" | Verificar que Git Gateway esté habilitado |
| Login no funciona | Verificar que Identity esté habilitado |
| No guarda cambios | Verificar permisos del repo en Git Gateway |
| Imágenes no suben | Verificar que `media_folder` exista |
