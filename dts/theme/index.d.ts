import 'assets/fonts.scss';
import './external';
import { PropsWithChildren } from 'react';
import type { Colors, Theme } from './theme';
export * from './dynamic';
export * from './layer';
export type { Color, Colors, Theme } from './theme';
export * as ThemedText from './type';
export declare const brand = "hsl(331.3, 100%, 50%)";
export declare const lightTheme: Colors;
export declare const darkTheme: Colors;
export declare const defaultTheme: {
    accent: string;
    container: string;
    module: string;
    interactive: string;
    outline: string;
    dialog: string;
    primary: string;
    onAccent: string;
    secondary: string;
    hint: string;
    onInteractive: string;
    active: string;
    success: string;
    warning: string;
    error: string;
    currentColor: "currentColor";
    borderRadius: number;
    fontFamily: {
        font: string;
        variable: string;
    };
    fontFamilyCode: string;
    tokenColorExtraction: boolean;
};
export declare function useSystemTheme(): Colors;
export interface ThemeProps {
    theme?: Theme;
}
export declare function ThemeProvider({ theme, children }: PropsWithChildren<ThemeProps>): JSX.Element;
