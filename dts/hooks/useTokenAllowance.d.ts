import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { ApprovalTransactionInfo } from 'state/transactions';
export declare function useTokenAllowance(token?: Token, owner?: string, spender?: string): {
    tokenAllowance: CurrencyAmount<Token> | undefined;
    isSyncing: boolean;
};
export declare function useUpdateTokenAllowance(amount: CurrencyAmount<Token> | undefined, spender: string): () => Promise<ApprovalTransactionInfo>;
