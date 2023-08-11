/// <reference types="react" />
import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { PriceImpact } from 'hooks/usePriceImpact';
import { Slippage } from 'hooks/useSlippage';
import { InterfaceTrade } from 'state/routing/types';
interface DetailsProps {
    trade: InterfaceTrade;
    slippage: Slippage;
    gasUseEstimateUSD?: CurrencyAmount<Token>;
    impact?: PriceImpact;
}
export default function Details({ trade, slippage, gasUseEstimateUSD, impact }: DetailsProps): JSX.Element;
export {};
