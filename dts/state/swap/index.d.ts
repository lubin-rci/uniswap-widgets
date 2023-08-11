import { Currency, TradeType } from '@uniswap/sdk-core';
import { FeeOptions } from '@uniswap/v3-sdk';
import { InterfaceTrade } from 'state/routing/types';
import { Slippage } from './settings';
export declare enum Field {
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
}
export interface Swap {
    type: TradeType;
    amount: string;
    [Field.INPUT]?: Currency;
    [Field.OUTPUT]?: Currency;
}
export declare const controlledAtom: import("jotai").Atom<Swap | undefined> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, unstable_promise: true): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, unstable_promise: true): Value_4 | Promise<Value_4>;
    }, set: {
        <Value_5, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_5, undefined, Result>): Result;
        <Value_6, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, Update, Result_1>, update: Update): Result_1;
    }, update: Swap | ((prev: Swap | undefined) => Swap | undefined) | undefined) => void;
    onMount?: (<S extends (update?: Swap | ((prev: Swap | undefined) => Swap | undefined) | undefined) => void>(setAtom: S) => void | (() => void)) | undefined;
} & {
    init: Swap | undefined;
};
export declare const stateAtom: import("jotai").WritableAtom<Swap, Swap | ((draft: import("immer/dist/internal").WritableDraft<Swap>) => void), void>;
export declare const swapAtom: import("jotai").WritableAtom<Swap, Swap | ((draft: import("immer/dist/internal").WritableDraft<Swap>) => void), void>;
export declare const displayTxHashAtom: import("jotai").Atom<string | undefined> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, unstable_promise: true): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, unstable_promise: true): Value_4 | Promise<Value_4>;
    }, set: {
        <Value_5, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_5, undefined, Result>): Result;
        <Value_6, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, Update, Result_1>, update: Update): Result_1;
    }, update: string | ((prev: string | undefined) => string | undefined) | undefined) => void;
    onMount?: (<S extends (update?: string | ((prev: string | undefined) => string | undefined) | undefined) => void>(setAtom: S) => void | (() => void)) | undefined;
} & {
    init: string | undefined;
};
export declare const feeOptionsAtom: import("jotai").Atom<FeeOptions | undefined> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, unstable_promise: true): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, unstable_promise: true): Value_4 | Promise<Value_4>;
    }, set: {
        <Value_5, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_5, undefined, Result>): Result;
        <Value_6, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, Update, Result_1>, update: Update): Result_1;
    }, update: FeeOptions | ((prev: FeeOptions | undefined) => FeeOptions | undefined) | undefined) => void;
    onMount?: (<S extends (update?: FeeOptions | ((prev: FeeOptions | undefined) => FeeOptions | undefined) | undefined) => void>(setAtom: S) => void | (() => void)) | undefined;
} & {
    init: FeeOptions | undefined;
};
/** An integration hook called when the user resets settings. */
export declare type OnSettingsReset = () => void;
/** An integration hook called when the user changes slippage settings. */
export declare type OnSlippageChange = (slippage: Slippage) => void;
/** An integration hook called when the user changes transaction deadline settings. */
export declare type OnTransactionDeadlineChange = (ttl: number | undefined) => void;
interface SettingsEventHandlers {
    onSettingsReset?: OnSettingsReset;
    onSlippageChange?: OnSlippageChange;
    onTransactionDeadlineChange?: OnTransactionDeadlineChange;
}
/** An integration hook called when the user selects a new token. */
export declare type OnTokenChange = (field: Field, token: Currency) => void;
/**
 * An integration hook called when the user enters a new amount.
 * If the amount changed from the user clicking Max, origin will be set to 'max'.
 */
export declare type OnAmountChange = (field: Field, amount: string, origin?: 'max') => void;
/** An integration hook called when the user switches the tokens. */
export declare type OnSwitchTokens = () => void;
/**
 * An integration hook called when the user clicks the token selector.
 * If the hook resolve to false or rejects, the token selector will not open.
 */
export declare type OnTokenSelectorClick = (field: Field) => void | boolean | Promise<boolean>;
interface InputEventHandlers {
    onTokenChange?: OnTokenChange;
    onAmountChange?: OnAmountChange;
    onSwitchTokens?: OnSwitchTokens;
    onTokenSelectorClick?: OnTokenSelectorClick;
}
/** An integration hook called when the user approves a token, either through allowance or permit. */
export declare type OnSwapApprove = () => void;
/** An integration hook called when the user receives an initial quote for a set of inputs. */
export declare type OnInitialSwapQuote = (trade: InterfaceTrade) => void;
/** An integration hook called when the user acks a quote's price update. */
export declare type OnSwapPriceUpdateAck = (stale: InterfaceTrade, update: InterfaceTrade) => void;
/** An integration hook called when the user expands a swap's details. */
export declare type OnExpandSwapDetails = () => void;
/**
 * An integration hook called when the user clicks 'Review swap'.
 * If the hook resolves to false or rejects, the review dialog will not open.
 */
export declare type OnReviewSwapClick = () => void | boolean | Promise<boolean>;
/** An integration hook called when the user confirms a swap, but before it is submitted. */
export declare type OnSubmitSwapClick = (trade: InterfaceTrade) => void;
export interface SwapEventHandlers extends SettingsEventHandlers, InputEventHandlers {
    onSwapApprove?: OnSwapApprove;
    onInitialSwapQuote?: OnInitialSwapQuote;
    onSwapPriceUpdateAck?: OnSwapPriceUpdateAck;
    onExpandSwapDetails?: OnExpandSwapDetails;
    onReviewSwapClick?: OnReviewSwapClick;
    onSubmitSwapClick?: OnSubmitSwapClick;
}
export declare const swapEventHandlersAtom: import("jotai").Atom<SwapEventHandlers> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, unstable_promise: true): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, unstable_promise: true): Value_4 | Promise<Value_4>;
    }, set: {
        <Value_5, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_5, undefined, Result>): Result;
        <Value_6, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, Update, Result_1>, update: Update): Result_1;
    }, update: SwapEventHandlers | ((prev: SwapEventHandlers) => SwapEventHandlers)) => void;
    onMount?: (<S extends (update: SwapEventHandlers | ((prev: SwapEventHandlers) => SwapEventHandlers)) => void>(setAtom: S) => void | (() => void)) | undefined;
} & {
    init: SwapEventHandlers;
};
export {};
