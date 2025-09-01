// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      screens: {
        'max-lg': { max: '900px' },
      },
    },
  },
}

export default config
