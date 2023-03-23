// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#6367E7',
    white: '#FFFFFF',
    'label-primary': '#14142A',
    'label-secondary': '#4E4B66',
    'label-placeholder': '#A0A3BD',
    background: '#F7F7FC',
    'input-background': '#EFF0F6',
    seperator: '#D9DBE9',
    'background-menu': '#140D33',
    purple: '#B32AEC',

    junior: '#D0EBFC',
    cto: '#E8CEF1',
    senior: '#DEFAEA',
    chip: '#E9E9FF',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
})