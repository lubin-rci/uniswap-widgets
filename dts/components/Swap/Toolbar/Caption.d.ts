/// <reference types="react" />
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { PriceImpact } from 'hooks/usePriceImpact';
import { InterfaceTrade } from 'state/routing/types';
export declare function Connecting(): JSX.Element;
export declare function ConnectWallet(): JSX.Element;
export declare function UnsupportedNetwork(): JSX.Element;
export declare function InsufficientBalance({ currency }: {
    currency: Currency;
}): JSX.Element;
export declare function InsufficientLiquidity(): JSX.Element;
export declare function Error(): JSX.Element;
export declare function MissingInputs(): JSX.Element;
export declare function LoadingTrade(): JSX.Element;
export declare function WrapCurrency({ inputCurrency, outputCurrency }: {
    inputCurrency: Currency;
    outputCurrency: Currency;
}): JSX.Element;
export declare function Trade({ trade, outputUSDC, impact, }: {
    trade: InterfaceTrade;
    outputUSDC?: CurrencyAmount<Currency>;
    impact?: PriceImpact;
}): JSX.Element;
