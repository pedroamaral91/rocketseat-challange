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

    fonts: {
      colors: {
        placeholder: string
        label: string
      }
      weight: {
        bold: number
      }
    }
  }
}
