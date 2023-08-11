/// <reference types="react" />
import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { PriceImpact } from 'hooks/usePriceImpact';
import { Slippage } from 'hooks/useSlippage';
import { InterfaceTrade } from 'state/routing/types';
import Summary from './Summary';
export default Summary;
interface SummaryDialogProps {
    trade: InterfaceTrade;
    slippage: Slippage;
    gasUseEstimateUSD?: CurrencyAmount<Token>;
    inputUSDC?: CurrencyAmount<Currency>;
    outputUSDC?: CurrencyAmount<Currency>;
    impact?: PriceImpact;
    onConfirm: () => Promise<void>;
}
export declare function SummaryDialog({ trade, slippage, gasUseEstimateUSD, inputUSDC, outputUSDC, impact, onConfirm, }: SummaryDialogProps): JSX.Element;
