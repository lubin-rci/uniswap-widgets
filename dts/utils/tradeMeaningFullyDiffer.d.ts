import { InterfaceTrade } from 'state/routing/types';
/**
 * Returns true if the trade requires a confirmation of details before we can submit it
 * @param args either a pair of V2 trades or a pair of V3 trades
 */
export declare function tradeMeaningfullyDiffers(...args: [InterfaceTrade, InterfaceTrade]): boolean;
