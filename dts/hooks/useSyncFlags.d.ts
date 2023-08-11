import { Atom } from 'jotai';
export interface Flags {
    brandedFooter?: boolean;
    permit2?: boolean;
}
export declare function useInitialFlags({ brandedFooter, permit2 }: Flags): [[Atom<Flags>, Flags]];
export declare function useBrandedFooter(): boolean;
export declare function usePermit2(): boolean;
