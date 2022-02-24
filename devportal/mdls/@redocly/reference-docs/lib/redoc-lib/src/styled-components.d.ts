import * as styledComponents from 'styled-components';
import { ResolvedThemeInterface, MediaValue } from './theme';
import { ProTheme } from '../../services/extendTheme';
export type { ResolvedThemeInterface, MediaValue };
declare const styled: styledComponents.ThemedStyledInterface<ProTheme>, css: styledComponents.ThemedCssFunction<ProTheme>, createGlobalStyle: <P extends object = {}>(first: TemplateStringsArray | styledComponents.CSSObject | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, ProTheme>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, ProTheme>>[]) => styledComponents.GlobalStyleComponent<P, ProTheme>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: styledComponents.ThemeProviderComponent<ProTheme, ProTheme>;
export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
export declare function extensionsHook(styledName: string): any;
export { mediaCSS, mediaMap, ZERO_BREAKPOINT } from './utils/media-css';
