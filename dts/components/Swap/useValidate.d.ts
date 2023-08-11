import { FeeOptions } from 'hooks/swap/useSyncConvenienceFee';
import { TokenDefaults } from 'hooks/swap/useSyncTokenDefaults';
import { PropsWithChildren } from 'react';
declare type ValidatorProps = PropsWithChildren<TokenDefaults & FeeOptions>;
export default function useValidate(props: ValidatorProps): void;
export {};
