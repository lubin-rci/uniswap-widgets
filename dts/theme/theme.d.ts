export interface Colors {
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
    currentColor: 'currentColor';
}
export declare type Color = keyof Colors;
export interface Attributes {
    borderRadius: boolean | number;
    fontFamily: string | {
        font: string;
        variable: string;
    };
    fontFamilyCode: string;
    tokenColorExtraction: boolean;
}
export interface Theme extends Partial<Attributes>, Partial<Colors> {
}
