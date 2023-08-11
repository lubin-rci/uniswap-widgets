import { BigNumber } from '@ethersproject/bignumber';
import { TransactionResponse } from '@ethersproject/providers';
import { Percent } from '@uniswap/sdk-core';
import { FeeOptions } from '@uniswap/v3-sdk';
import { InterfaceTrade } from 'state/routing/types';
import { PermitSignature } from './usePermitAllowance';
interface SwapOptions {
    slippageTolerance: Percent;
    deadline?: BigNumber;
    permit?: PermitSignature;
    feeOptions?: FeeOptions;
}
export declare function useUniversalRouterSwapCallback(trade: InterfaceTrade | undefined, options: SwapOptions): () => Promise<TransactionResponse>;
export {};
