    # Radiant Dental Care - Next.js App

A modern, responsive dental care website built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design with Tailwind CSS
- Material Design symbols for icons
- Modern animations and transitions
- Component-based architecture
- SEO-optimized with Next.js Head meta tags
- Custom color theme matching Material Design 3

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Install peer dependencies for Tailwind plugins:

```bash
npm install -D @tailwindcss/forms @tailwindcss/container-queries
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
radiant-dental-care/
├── components/
│   ├── Header.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── WhyChooseUs.jsx     # Feature cards section
│   ├── Testimonials.jsx    # Patient testimonials
│   ├── CTA.jsx             # Call-to-action section
│   └── Footer.jsx          # Footer
├── pages/
│   ├── _app.jsx            # App wrapper with global styles
│   ├── _document.jsx       # HTML document structure
│   └── index.jsx           # Home page
├── styles/
│   └── globals.css         # Global CSS with Tailwind directives
├── public/                 # Static files
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
└── jsconfig.json           # JavaScript configuration

```

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds for production
- `npm start` - Runs production server
- `npm run lint` - Runs ESLint

## Technologies Used

- **Next.js** - React framework for production
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Material Symbols** - Google Material Design icons
- **Manrope & Inter** - Google Fonts

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette. All colors are defined in the theme extension.

### Fonts

Fonts are loaded in `pages/_document.jsx`. To change fonts, update the Google Fonts link and `tailwind.config.js` fontFamily settings.

### Content

All content is in the component files. Edit individual components in the `components/` folder to customize text, images, and functionality.

## Deployment

This project can be deployed to Vercel, Netlify, or any other Next.js-compatible hosting platform.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
``` 

## License

This project is open source and available under the MIT License.
