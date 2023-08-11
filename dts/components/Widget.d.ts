import { TokenInfo } from '@uniswap/token-lists';
import { OnError } from 'components/Error/ErrorBoundary';
import { SupportedLocale } from 'constants/locales';
import { TransactionEventHandlers } from 'hooks/transactions';
import { Flags } from 'hooks/useSyncFlags';
import { WidgetEventHandlers } from 'hooks/useSyncWidgetEventHandlers';
import { ProviderProps as Web3Props } from 'hooks/web3';
import { Atom } from 'jotai';
import { PropsWithChildren } from 'react';
import { Theme } from 'theme';
export declare const WidgetWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    width?: string | number | undefined;
}, never>;
export declare const DialogWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export interface WidgetProps extends Flags, TransactionEventHandlers, Web3Props, WidgetEventHandlers {
    theme?: Theme;
    locale?: SupportedLocale;
    tokenList?: string | TokenInfo[];
    width?: string | number;
    dialog?: HTMLDivElement | null;
    className?: string;
    onError?: OnError;
}
export default function Widget(props: PropsWithChildren<WidgetProps>): JSX.Element;
export interface TestableWidgetProps extends WidgetProps {
    initialAtomValues?: Iterable<readonly [Atom<unknown>, unknown]>;
}
export declare function TestableWidget(props: PropsWithChildren<TestableWidgetProps>): JSX.Element;
