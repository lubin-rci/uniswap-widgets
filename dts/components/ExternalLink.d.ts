import { HTMLProps } from 'react';
/**
 * Outbound link
 */
export default function ExternalLink({ target, href, rel, ...rest }: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & {
    href?: string;
}): JSX.Element;
