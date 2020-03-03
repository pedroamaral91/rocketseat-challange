import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      primary: string
      success: string
      danger: string
      warning: string
      info: string
      accent: string
    }
    background: {
      primary: string
    }
    border: {
      colors: {
        primary: string
      }
    }
    fonts: {
      colors: {
        primary: string
        secondary: string
        active: string
      }
      weight: {
        bold: number
      }
    }
  }
}
