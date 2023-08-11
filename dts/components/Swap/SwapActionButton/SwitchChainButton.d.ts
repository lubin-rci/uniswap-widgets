/// <reference types="react" />
import { Colors } from 'theme';
/** A chain-switching ActionButton. */
export default function ChainSwitchButton({ color, chainId }: {
    color: keyof Colors;
    chainId: number;
}): JSX.Element;
