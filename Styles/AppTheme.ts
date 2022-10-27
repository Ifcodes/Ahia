import * as styledComponents from 'styled-components/native'

const AppTheme = {
  colors:{
    darkRed: 'maroon',
  }
}

export type ThemeType = typeof AppTheme

const {default: styled, css, ThemeProvider} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeType>

export {css, ThemeProvider, AppTheme}
export default styled;