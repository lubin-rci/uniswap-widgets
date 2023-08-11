import { Placement } from '@popperjs/core';
import { Icon } from 'icons';
import { ComponentProps, ReactNode } from 'react';
export declare function useTooltip(tooltip: Node | null | undefined): boolean;
interface TooltipProps {
    icon?: Icon;
    iconProps?: ComponentProps<Icon>;
    children: ReactNode;
    placement?: Placement;
    offset?: number;
    contained?: true;
}
export default function Tooltip({ icon: Icon, iconProps, children, placement, offset, contained, }: TooltipProps): JSX.Element;
export {};
