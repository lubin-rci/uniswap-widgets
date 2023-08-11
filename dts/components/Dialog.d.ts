import 'wicg-inert';
import { ReactElement, ReactNode } from 'react';
import { Color } from 'theme';
declare global {
    interface HTMLElement {
        inert?: boolean;
    }
}
export declare enum Animation {
    /** Used when the Dialog is closing. */
    CLOSING = "closing",
    /**
     * Used when the Dialog is paging to another Dialog screen.
     * Paging occurs when multiple screens are sequenced in the Dialog, so that an action that closes
     * one will simultaneously open the next. Special-casing paging animations can make the user feel
     * like they are not leaving the Dialog, despite the initial screen closing.
     */
    PAGING = "paging"
}
interface ProviderProps {
    value: HTMLElement | null;
    children: ReactNode;
}
export declare function Provider({ value, children }: ProviderProps): JSX.Element;
interface HeaderProps {
    title?: ReactElement;
    ruled?: boolean;
    children?: ReactNode;
}
export declare function Header({ title, children, ruled }: HeaderProps): JSX.Element;
export declare const Modal: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    color: Color;
}, never>;
interface DialogProps {
    color: Color;
    children: ReactNode;
    onClose?: () => void;
}
export default function Dialog({ color, children, onClose }: DialogProps): import("react").ReactPortal | null;
export {};
