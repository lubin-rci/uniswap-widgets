/// <reference types="react" />
import { ApprovalTransactionInfo, SwapTransactionInfo } from 'state/transactions';
import { Colors } from 'theme';
/**
 * A swapping ActionButton.
 * Should only be rendered if a valid swap exists.
 */
export default function SwapButton({ color, disabled, onSubmit, }: {
    color: keyof Colors;
    disabled: boolean;
    onSubmit: (submit: () => Promise<ApprovalTransactionInfo | SwapTransactionInfo | void>) => Promise<void>;
}): JSX.Element;
