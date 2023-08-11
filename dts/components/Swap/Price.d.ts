/// <reference types="react" />
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
interface PriceProps {
    trade: InterfaceTrade;
    outputUSDC?: CurrencyAmount<Currency>;
}
/** Displays the price of a trade. If outputUSDC is included, also displays the unit price. */
export default function Price({ trade, outputUSDC }: PriceProps): JSX.Element;
export {};
