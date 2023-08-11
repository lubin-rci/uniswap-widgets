/// <reference types="react" />
import { TransactionResponse } from '@ethersproject/providers';
import { SwapApprovalState } from 'hooks/swap/useSwapApproval';
import { InterfaceTrade } from 'state/routing/types';
import { ApprovalTransactionInfo } from 'state/transactions';
import { Colors } from 'theme';
/**
 * An approving ActionButton.
 * Should only be rendered if a valid trade exists that is not yet approved.
 */
export default function ApproveButton({ color, trade, state, approve, onSubmit, }: {
    color: keyof Colors;
    trade?: InterfaceTrade;
    state: SwapApprovalState;
    approve?: () => Promise<{
        response: TransactionResponse;
        tokenAddress: string;
        spenderAddress: string;
    } | void>;
    onSubmit: (submit: () => Promise<ApprovalTransactionInfo | void>) => Promise<void>;
}): JSX.Element;
