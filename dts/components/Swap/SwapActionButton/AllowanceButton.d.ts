/// <reference types="react" />
import { AllowanceRequired } from 'hooks/usePermit2Allowance';
import { Colors } from 'theme';
interface AllowanceButtonProps extends AllowanceRequired {
    color: keyof Colors;
}
/**
 * An approving AllowanceButton.
 * Should only be rendered if a valid trade exists that is not yet allowed.
 */
export default function AllowanceButton({ token, isApprovalLoading, approveAndPermit, color }: AllowanceButtonProps): JSX.Element;
export {};
