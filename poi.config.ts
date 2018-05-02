import { Options } from 'poi'

const options: Options = {
  entry: './src/index.tsx',
  env: { APP_DESCRIPTION: 'Pomodoro App' },
  presets: [require('poi-preset-react')(), require('poi-preset-typescript')()]
}

export default options
