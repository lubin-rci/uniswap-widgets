import type { AlphaRouterConfig } from '@uniswap/smart-order-router';
import { GetQuoteArgs, GetQuoteResult } from 'state/routing/types';
export declare function getClientSideQuote({ tokenInAddress, tokenInChainId, tokenInDecimals, tokenInSymbol, tokenOutAddress, tokenOutChainId, tokenOutDecimals, tokenOutSymbol, amount, tradeType, provider, }: GetQuoteArgs, routerConfig: Partial<AlphaRouterConfig>): Promise<GetQuoteResult>;
