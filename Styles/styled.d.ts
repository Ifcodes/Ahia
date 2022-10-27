import { ThemeType } from "./AppTheme";

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}