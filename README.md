# SmartEcoSchool

SmartEcoSchool es una página web desarrollada para el proyecto educativo "SmartEcoSchool", cuyo objetivo es transformar los centros educativos en espacios inteligentes y sostenibles mediante la implementación de tecnologías avanzadas.

## Descripción

El proyecto busca fomentar el uso eficiente y responsable de recursos como el agua y la luz en los centros educativos, utilizando tecnologías como Raspberry Pi, cámaras y monitores para monitorizar y visualizar el consumo en tiempo real. Además, promueve la concienciación ambiental y la innovación educativa.

## Características

- Monitorización en tiempo real de contadores de agua y luz.
- Visualización de datos de consumo para fomentar el ahorro y la sostenibilidad.
- Sección de objetivos, funcionamiento, equipo y colaboradores.
- Multilenguaje (español e inglés) usando i18next.
- Diseño responsive y moderno.

## Estructura del Proyecto

```
Smartecoschool/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── i18next.js
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   └── ... (imágenes y recursos)
│   ├── Components/
│   │   ├── About/
│   │   ├── AboutUs/
│   │   ├── Campus/
│   │   ├── Collaborators/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Programs/
│   │   ├── Testimonials/
│   │   └── VideoPlayer/
│   └── locales/
│       ├── en/translation.json
│       └── es/translation.json
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <url-del-repositorio>
   cd Smartecoschool
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Scripts disponibles

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza la versión de producción.
- `npm run lint` — Ejecuta ESLint para comprobar el código.

## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [i18next](https://www.i18next.com/) y [react-i18next](https://react.i18next.com/)
- [Tailwind CSS](https://tailwindcss.com/) (instalado, pero no usado en todos los componentes)
- [ESLint](https://eslint.org/)

## Créditos y Colaboradores

- Gobierno de Canarias ([web](https://www.gobiernodecanarias.org/principal/))
- IES El Rincón ([web](https://ieselrincon.es/))
- Equipo de estudiantes del Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma

## Licencia

Este proyecto es solo para fines educativos.

---

¡Gracias por apoyar la sostenibilidad y la innovación educativa!