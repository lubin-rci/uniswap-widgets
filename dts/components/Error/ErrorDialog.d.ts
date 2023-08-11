import { Icon } from 'icons';
import { ReactNode } from 'react';
import { Color } from 'theme';
interface StatusHeaderProps {
    icon: Icon;
    iconColor?: Color;
    iconSize?: number;
    children: ReactNode;
}
export declare function StatusHeader({ icon: Icon, iconColor, iconSize, children }: StatusHeaderProps): JSX.Element;
interface ErrorDialogProps {
    header?: ReactNode;
    error: Error;
    action: ReactNode;
    onClick: () => void;
}
export default function ErrorDialog({ header, error, action, onClick }: ErrorDialogProps): JSX.Element;
export {};
