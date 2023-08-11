import { ContractTransaction } from '@ethersproject/contracts';
import { TransactionType } from 'state/transactions';
interface UseWrapCallbackReturns {
    callback: () => Promise<ContractTransaction | void>;
    type?: TransactionType.WRAP | TransactionType.UNWRAP;
}
export declare function useWrapType(): TransactionType.WRAP | TransactionType.UNWRAP | undefined;
export declare function useIsWrap(): boolean;
export default function useWrapCallback(): UseWrapCallbackReturns;
export {};
