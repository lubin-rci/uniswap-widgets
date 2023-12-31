import { SupportedChainId } from 'constants/chains';
export declare type DefaultAddress = string | {
    [chainId: number]: string | 'NATIVE';
} | 'NATIVE';
export interface TokenDefaults {
    defaultInputTokenAddress?: DefaultAddress;
    defaultInputAmount?: number | string;
    defaultOutputTokenAddress?: DefaultAddress;
    defaultOutputAmount?: number | string;
    defaultChainId?: SupportedChainId;
}
export default function useSyncTokenDefaults({ defaultInputTokenAddress, defaultInputAmount, defaultOutputTokenAddress, defaultOutputAmount, defaultChainId, }: TokenDefaults): void;
