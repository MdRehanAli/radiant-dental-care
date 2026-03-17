/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#a855f7',
        'on-primary': '#ffffff',
        'secondary': '#83d3e1',
        'on-secondary': '#001f24',
        'tertiary': '#ffb877',
        'error': '#ff7f7d',
        'on-error': '#ffffff',
        'background': '#0a0d13',
        'on-background': '#e6edf3',
        'surface': '#0d1117',
        'on-surface': '#e6edf3',
        'surface-variant': '#161b22',
        'on-surface-variant': '#c9d1d9',
        'surface-container': '#1f2428',
        'outline': '#8b949e',
      },
      fontFamily: {
        'headline': ['Manrope'],
        'body': ['Inter'],
        'label': ['Inter'],
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/container-queries'),
    ],
  }
}
