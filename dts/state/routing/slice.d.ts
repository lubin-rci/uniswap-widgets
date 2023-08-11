import { BaseQueryFn, skipToken } from '@reduxjs/toolkit/query/react';
import { GetQuoteArgs, GetQuoteResult } from './types';
export declare const routing: import("@reduxjs/toolkit/query/react").Api<BaseQueryFn<GetQuoteArgs, GetQuoteResult, unknown, {}, {}>, {
    getQuote: import("@reduxjs/toolkit/query/react").QueryDefinition<GetQuoteArgs | typeof skipToken, BaseQueryFn<GetQuoteArgs, GetQuoteResult, unknown, {}, {}>, never, GetQuoteResult | undefined, "routing">;
}, "routing", never, typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
export declare const useLazyGetQuoteQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<GetQuoteArgs | typeof skipToken, BaseQueryFn<GetQuoteArgs, GetQuoteResult, unknown, {}, {}>, never, GetQuoteResult | undefined, "routing">>;
export declare const useGetQuoteQueryState: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQueryState<import("@reduxjs/toolkit/query/react").QueryDefinition<GetQuoteArgs | typeof skipToken, BaseQueryFn<GetQuoteArgs, GetQuoteResult, unknown, {}, {}>, never, GetQuoteResult | undefined, "routing">>;
