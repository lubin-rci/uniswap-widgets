import { ReactElement, ReactNode } from 'react';
export interface HeaderProps {
    title?: ReactElement;
    children: ReactNode;
}
export default function Header({ title, children }: HeaderProps): JSX.Element;
