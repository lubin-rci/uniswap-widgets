import { Percent } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export interface PriceImpact {
    percent: Percent;
    warning?: 'warning' | 'error';
    toString(): string;
}
export declare function usePriceImpact(trade?: InterfaceTrade): {
    percent: Percent;
    warning: "warning" | "error" | undefined;
    toString: () => string;
} | undefined;
export declare function toHumanReadablePercent(priceImpact: Percent): string;
