import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      primary: string
      success: string
      danger: string
      warning: string
      info: string
    }
  }
}