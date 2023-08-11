/// <reference types="react" />
import { Currency, TradeType, Percent, CurrencyAmount } from '@uniswap/sdk-core';
export { Currency, TradeType } from '@uniswap/sdk-core';
import { Trade } from '@uniswap/router-sdk';
import { TokenInfo, TokenList } from '@uniswap/token-lists';
export { TokenInfo } from '@uniswap/token-lists';
import { ErrorInfo } from 'react';
import { TransactionReceipt, TransactionResponse } from '@ethersproject/abstract-provider';
export { Provider as EthersProvider } from '@ethersproject/abstract-provider';
import { JsonRpcProvider } from '@ethersproject/providers';
export { JsonRpcProvider } from '@ethersproject/providers';
import { Provider } from '@web3-react/types';
export { Provider as Eip1193Provider } from '@web3-react/types';

declare class InterfaceTrade extends Trade<Currency, Currency, TradeType> {
}

interface Slippage {
    auto: boolean;
    max: string | undefined;
}
interface Settings {
    slippage: Slippage;
    transactionTtl: number | undefined;
}

declare enum Field {
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
}
interface Swap {
    type: TradeType;
    amount: string;
    [Field.INPUT]?: Currency;
    [Field.OUTPUT]?: Currency;
}
/** An integration hook called when the user resets settings. */
declare type OnSettingsReset = () => void;
/** An integration hook called when the user changes slippage settings. */
declare type OnSlippageChange = (slippage: Slippage) => void;
/** An integration hook called when the user changes transaction deadline settings. */
declare type OnTransactionDeadlineChange = (ttl: number | undefined) => void;
interface SettingsEventHandlers {
    onSettingsReset?: OnSettingsReset;
    onSlippageChange?: OnSlippageChange;
    onTransactionDeadlineChange?: OnTransactionDeadlineChange;
}
/** An integration hook called when the user selects a new token. */
declare type OnTokenChange = (field: Field, token: Currency) => void;
/**
 * An integration hook called when the user enters a new amount.
 * If the amount changed from the user clicking Max, origin will be set to 'max'.
 */
declare type OnAmountChange = (field: Field, amount: string, origin?: 'max') => void;
/** An integration hook called when the user switches the tokens. */
declare type OnSwitchTokens = () => void;
/**
 * An integration hook called when the user clicks the token selector.
 * If the hook resolve to false or rejects, the token selector will not open.
 */
declare type OnTokenSelectorClick = (field: Field) => void | boolean | Promise<boolean>;
interface InputEventHandlers {
    onTokenChange?: OnTokenChange;
    onAmountChange?: OnAmountChange;
    onSwitchTokens?: OnSwitchTokens;
    onTokenSelectorClick?: OnTokenSelectorClick;
}
/** An integration hook called when the user approves a token, either through allowance or permit. */
declare type OnSwapApprove = () => void;
/** An integration hook called when the user receives an initial quote for a set of inputs. */
declare type OnInitialSwapQuote = (trade: InterfaceTrade) => void;
/** An integration hook called when the user acks a quote's price update. */
declare type OnSwapPriceUpdateAck = (stale: InterfaceTrade, update: InterfaceTrade) => void;
/** An integration hook called when the user expands a swap's details. */
declare type OnExpandSwapDetails = () => void;
/**
 * An integration hook called when the user clicks 'Review swap'.
 * If the hook resolves to false or rejects, the review dialog will not open.
 */
declare type OnReviewSwapClick = () => void | boolean | Promise<boolean>;
/** An integration hook called when the user confirms a swap, but before it is submitted. */
declare type OnSubmitSwapClick = (trade: InterfaceTrade) => void;
interface SwapEventHandlers extends SettingsEventHandlers, InputEventHandlers {
    onSwapApprove?: OnSwapApprove;
    onInitialSwapQuote?: OnInitialSwapQuote;
    onSwapPriceUpdateAck?: OnSwapPriceUpdateAck;
    onExpandSwapDetails?: OnExpandSwapDetails;
    onReviewSwapClick?: OnReviewSwapClick;
    onSubmitSwapClick?: OnSubmitSwapClick;
}

interface SwapController {
    value?: Swap;
    settings?: Settings;
}

interface FeeOptions {
    convenienceFee?: number;
    convenienceFeeRecipient?: string | string | {
        [chainId: number]: string;
    };
}

/**
 * List of all the networks supported by the Uniswap Interface
 */
declare enum SupportedChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GOERLI = 5,
    KOVAN = 42,
    ARBITRUM_ONE = 42161,
    ARBITRUM_RINKEBY = 421611,
    OPTIMISM = 10,
    OPTIMISTIC_KOVAN = 69,
    POLYGON = 137,
    POLYGON_MUMBAI = 80001,
    CELO = 42220,
    CELO_ALFAJORES = 44787
}

declare type DefaultAddress = string | {
    [chainId: number]: string | 'NATIVE';
} | 'NATIVE';
interface TokenDefaults {
    defaultInputTokenAddress?: DefaultAddress;
    defaultInputAmount?: number | string;
    defaultOutputTokenAddress?: DefaultAddress;
    defaultOutputAmount?: number | string;
    defaultChainId?: SupportedChainId;
}

interface SwapProps extends FeeOptions, SwapController, SwapEventHandlers, TokenDefaults {
    hideConnectionUI?: boolean;
    routerUrl?: string;
}

declare type OnError = (error: Error, info: ErrorInfo) => void;

declare const SUPPORTED_LOCALES: string[];
declare type SupportedLocale = typeof SUPPORTED_LOCALES[number] | 'pseudo';
declare const DEFAULT_LOCALE: SupportedLocale;

declare enum TransactionType {
    APPROVAL = 0,
    SWAP = 1,
    WRAP = 2,
    UNWRAP = 3
}
interface BaseTransactionInfo {
    type: TransactionType;
    response: TransactionResponse;
}
interface ApprovalTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.APPROVAL;
    tokenAddress: string;
    spenderAddress: string;
}
interface SwapTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.SWAP;
    tradeType: TradeType;
    trade: InterfaceTrade;
    slippageTolerance: Percent;
}
interface ExactInputSwapTransactionInfo extends SwapTransactionInfo {
    tradeType: TradeType.EXACT_INPUT;
}
interface ExactOutputSwapTransactionInfo extends SwapTransactionInfo {
    tradeType: TradeType.EXACT_OUTPUT;
}
interface WrapTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.WRAP;
    amount: CurrencyAmount<Currency>;
}
interface UnwrapTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.UNWRAP;
    amount: CurrencyAmount<Currency>;
}
declare type TransactionInfo = ApprovalTransactionInfo | SwapTransactionInfo | WrapTransactionInfo | UnwrapTransactionInfo;
interface Transaction<T extends TransactionInfo = TransactionInfo> {
    addedTime: number;
    lastCheckedBlockNumber?: number;
    receipt?: TransactionReceipt;
    info: T;
}

declare type OnTxSubmit = (hash: string, tx: Transaction) => void;
declare type OnTxSuccess = (hash: string, receipt: TransactionReceipt) => void;
declare type OnTxFail = (hash: string, receipt: TransactionReceipt) => void;
interface TransactionEventHandlers {
    onTxSubmit?: OnTxSubmit;
    onTxSuccess?: OnTxSuccess;
    onTxFail?: OnTxFail;
}

interface Flags {
    brandedFooter?: boolean;
    permit2?: boolean;
}

/** Defined by EIP-3085. */
interface AddEthereumChainParameter {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: 18;
    };
    blockExplorerUrls: [string];
    rpcUrls: string[];
}
/**
 * An integration hook called when the user tries to switch chains.
 * If the hook returns a Promise, it is assumed the integrator is attempting to switch the chain, and no further attempts will be made.
 * If that Promise rejects, the error will be ignored so as not to crash the widget.
 */
declare type OnSwitchChain = (addChainParameter: AddEthereumChainParameter) => void | Promise<void>;

declare type OnConnectWalletClick = () => void | boolean | Promise<boolean>;

interface WidgetEventHandlers {
    onConnectWalletClick?: OnConnectWalletClick;
    onError?: OnError;
    onSwitchChain?: OnSwitchChain;
}

declare type JsonRpcConnectionMap = {
    [chainId: number]: string | string[] | JsonRpcProvider | JsonRpcProvider[];
};

interface ProviderProps {
    defaultChainId?: SupportedChainId;
    jsonRpcUrlMap?: JsonRpcConnectionMap;
    /**
     * If null, no auto-connection (MetaMask or WalletConnect) will be attempted.
     * This is appropriate for integrations which wish to control the connected provider.
     */
    provider?: Provider | JsonRpcProvider | null;
}

interface Colors {
    accent: string;
    container: string;
    module: string;
    interactive: string;
    outline: string;
    dialog: string;
    primary: string;
    onAccent: string;
    secondary: string;
    hint: string;
    onInteractive: string;
    active: string;
    success: string;
    warning: string;
    error: string;
    currentColor: 'currentColor';
}
interface Attributes {
    borderRadius: boolean | number;
    fontFamily: string | {
        font: string;
        variable: string;
    };
    fontFamilyCode: string;
    tokenColorExtraction: boolean;
}
interface Theme extends Partial<Attributes>, Partial<Colors> {
}

declare const lightTheme: Colors;
declare const darkTheme: Colors;
declare const defaultTheme: {
    accent: string;
    container: string;
    module: string;
    interactive: string;
    outline: string;
    dialog: string;
    primary: string;
    onAccent: string;
    secondary: string;
    hint: string;
    onInteractive: string;
    active: string;
    success: string;
    warning: string;
    error: string;
    currentColor: "currentColor";
    borderRadius: number;
    fontFamily: {
        font: string;
        variable: string;
    };
    fontFamilyCode: string;
    tokenColorExtraction: boolean;
};

interface WidgetProps extends Flags, TransactionEventHandlers, ProviderProps, WidgetEventHandlers {
    theme?: Theme;
    locale?: SupportedLocale;
    tokenList?: string | TokenInfo[];
    width?: string | number;
    dialog?: HTMLDivElement | null;
    className?: string;
    onError?: OnError;
}

interface SwapWidgetSkeletonProps {
    theme?: Theme;
    width?: string | number;
}
declare function SwapWidgetSkeleton({ theme, width }: SwapWidgetSkeletonProps): JSX.Element;

declare const UNISWAP_TOKEN_LIST = "https://gateway.ipfs.io/ipns/tokens.uniswap.org";
declare const EMPTY_TOKEN_LIST: never[];

/**
 * Validates an array of tokens.
 * @param json the TokenInfo[] to validate
 */
declare function validateTokens(json: TokenInfo[]): Promise<TokenInfo[]>;
/**
 * Validates a token list.
 * @param json the TokenList to validate
 */
declare function validateTokenList(json: TokenList): Promise<TokenList>;

declare function invertTradeType(tradeType: TradeType): TradeType;
declare function toTradeType(modifiedField: Field): TradeType;

declare type SwapWidgetProps = SwapProps & WidgetProps;
declare function SwapWidget(props: SwapWidgetProps): JSX.Element;

export { AddEthereumChainParameter, ApprovalTransactionInfo, DEFAULT_LOCALE, DefaultAddress, EMPTY_TOKEN_LIST, ExactInputSwapTransactionInfo, ExactOutputSwapTransactionInfo, FeeOptions, Field, Flags, JsonRpcConnectionMap, OnAmountChange, OnConnectWalletClick, OnError, OnExpandSwapDetails, OnInitialSwapQuote, OnReviewSwapClick, OnSettingsReset, OnSlippageChange, OnSubmitSwapClick, OnSwapApprove, OnSwapPriceUpdateAck, OnSwitchChain, OnSwitchTokens, OnTokenChange, OnTokenSelectorClick, OnTransactionDeadlineChange, OnTxFail, OnTxSubmit, OnTxSuccess, SUPPORTED_LOCALES, Slippage, SupportedChainId, SupportedLocale, SwapController, SwapEventHandlers, SwapTransactionInfo, SwapWidget, SwapWidgetProps, SwapWidgetSkeleton, SwapWidgetSkeletonProps, Theme, TokenDefaults, Transaction, TransactionEventHandlers, TransactionInfo, TransactionType, UNISWAP_TOKEN_LIST, UnwrapTransactionInfo, WidgetEventHandlers, WrapTransactionInfo, darkTheme, defaultTheme, invertTradeType, lightTheme, toTradeType, validateTokenList, validateTokens };
