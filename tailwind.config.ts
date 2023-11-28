import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'kanban-column-color-fazer': ' rgb(42, 165, 52)',
        'kanban-column-color-fazendo': 'rgb(252, 215, 8)',
        'kanban-column-color-pausado': 'rgb(230, 2, 2)',
        'kanban-column-color-finalizado': '#5eead4',
      },
      borderColor: {
        'kanban-border-fazer': ' rgb(42, 165, 52)',
        'kanban-border-fazendo': 'rgb(252, 215, 8)',
        'kanban-border-pausado': 'rgb(230, 2, 2)',
        'kanban-border-finalizado': '#5eead4',
      }
    },
  },
  plugins: [],
}
export default config
