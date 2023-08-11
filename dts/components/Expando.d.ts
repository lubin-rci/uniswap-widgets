import { ColumnProps } from 'components/Column';
import { PropsWithChildren, ReactNode } from 'react';
interface ExpandoProps extends ColumnProps {
    title: ReactNode;
    open: boolean;
    onExpand: () => void;
    height: number;
}
/** A scrollable Expando with an absolute height. */
export default function Expando({ title, open, onExpand, height, children, ...rest }: PropsWithChildren<ExpandoProps>): JSX.Element;
export {};
