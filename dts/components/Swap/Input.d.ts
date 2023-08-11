/// <reference types="react" />
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { PriceImpact } from 'hooks/usePriceImpact';
import { Field } from 'state/swap';
export declare function useFormattedFieldAmount({ currencyAmount, fieldAmount, }: {
    currencyAmount?: CurrencyAmount<Currency>;
    fieldAmount?: string;
}): string;
interface FieldWrapperProps {
    field: Field;
    maxAmount?: string;
    isSufficientBalance?: boolean;
    approved?: boolean;
    impact?: PriceImpact;
}
export declare function FieldWrapper({ field, maxAmount, isSufficientBalance, approved, impact, className, }: FieldWrapperProps & {
    className?: string;
}): JSX.Element;
export default function Input(): JSX.Element;
export {};
