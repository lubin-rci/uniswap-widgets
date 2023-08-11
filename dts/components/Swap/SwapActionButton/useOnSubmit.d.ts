import { TransactionInfo } from 'state/transactions';
/** Submits a transaction. */
export default function useOnSubmit(): (submit: () => Promise<TransactionInfo | void>) => Promise<void>;
