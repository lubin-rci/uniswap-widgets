import { ReactNode } from 'react';
import { Color } from 'theme';
import { ExplorerDataType } from 'utils/getExplorerLink';
interface EtherscanLinkProps {
    type: ExplorerDataType;
    data?: string;
    color?: Color;
    children: ReactNode;
}
export default function EtherscanLink({ data, type, color, children }: EtherscanLinkProps): JSX.Element;
export {};
