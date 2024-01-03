// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, type ThemeDefinition } from 'vuetify'

// const myCustomLightTheme: ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: '#f4f4f4',
//     surface: '#FFFFFF',
//     primary: '#6200EE',
//     'primary-darken-1': '#3700B3',
//     secondary: '#03DAC6',
//     'secondary-darken-1': '#018786',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   },
// }

// export default createVuetify({
//   theme: {
//     defaultTheme: 'myCustomLightTheme',
//     themes: {
//       myCustomLightTheme,
//     },
//   },
// })

import { VCalendar } from 'vuetify/labs/VCalendar';
export default createVuetify({
    components: {
        VCalendar,
    }
})