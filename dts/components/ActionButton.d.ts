import { Icon } from 'icons';
import { ReactNode } from 'react';
import { Color } from 'theme';
import { RowProps } from './Row';
export declare const Overlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowProps & {
    hasAction: boolean;
}, never>;
export interface Action {
    message: ReactNode;
    icon?: Icon;
    tooltipContent?: ReactNode;
    onClick?: () => void;
    children?: ReactNode;
}
export interface BaseProps {
    color?: Color;
    action?: Action;
    wrapperProps?: Omit<React.HtmlHTMLAttributes<HTMLDivElement>, keyof RowProps>;
}
export declare type ActionButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;
export default function ActionButton({ color, disabled, action, onClick, children, wrapperProps, ...rest }: ActionButtonProps): JSX.Element;
