/// <reference types="react" />
import { UnwrapTransactionInfo, WrapTransactionInfo } from 'state/transactions';
import { Colors } from 'theme';
/**
 * A wrapping ActionButton.
 * Should only be rendered if a valid wrap exists.
 */
export default function WrapButton({ color, disabled, onSubmit, }: {
    color: keyof Colors;
    disabled: boolean;
    onSubmit: (submit: () => Promise<WrapTransactionInfo | UnwrapTransactionInfo | void>) => Promise<void>;
}): JSX.Element;
