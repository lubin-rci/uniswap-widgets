import { Currency } from '@uniswap/sdk-core';
export default function useCurrencyLogoURIs(currency?: (Currency & {
    logoURI?: string;
}) | null): string[];
