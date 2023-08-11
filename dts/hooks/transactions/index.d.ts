/// <reference types="react" />
import { TransactionReceipt } from '@ethersproject/abstract-provider';
import { Token } from '@uniswap/sdk-core';
import { Transaction, TransactionInfo } from 'state/transactions';
export declare function usePendingTransactions(): {
    [hash: string]: Transaction<TransactionInfo>;
};
export declare function useAddTransactionInfo(): (info: TransactionInfo) => void;
/** Returns the hash of a pending approval transaction, if it exists. */
export declare function usePendingApproval(token?: Token, spender?: string): string | undefined;
export declare function useIsPendingApproval(token?: Token): boolean;
export declare type OnTxSubmit = (hash: string, tx: Transaction) => void;
export declare type OnTxSuccess = (hash: string, receipt: TransactionReceipt) => void;
export declare type OnTxFail = (hash: string, receipt: TransactionReceipt) => void;
export interface TransactionEventHandlers {
    onTxSubmit?: OnTxSubmit;
    onTxSuccess?: OnTxSuccess;
    onTxFail?: OnTxFail;
}
export declare function TransactionsUpdater({ onTxSubmit, onTxSuccess, onTxFail }: TransactionEventHandlers): JSX.Element;
