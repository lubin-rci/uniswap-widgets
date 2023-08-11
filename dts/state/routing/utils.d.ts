import { Currency, CurrencyAmount, TradeType } from '@uniswap/sdk-core';
import { Route as V2Route } from '@uniswap/v2-sdk';
import { Route as V3Route } from '@uniswap/v3-sdk';
import { InterfaceTrade, QuoteResult } from './types';
/**
 * Transforms a Routing API quote into an array of routes that can be used to create
 * a `Trade`.
 */
export declare function computeRoutes(currencyIn: Currency | undefined, currencyOut: Currency | undefined, tradeType: TradeType, quoteResult: Pick<QuoteResult, 'route'> | undefined): {
    routev3: V3Route<Currency, Currency> | null;
    routev2: V2Route<Currency, Currency> | null;
    inputAmount: CurrencyAmount<Currency>;
    outputAmount: CurrencyAmount<Currency>;
}[] | undefined;
export declare function transformRoutesToTrade<TTradeType extends TradeType>(route: ReturnType<typeof computeRoutes>, tradeType: TTradeType): InterfaceTrade;
