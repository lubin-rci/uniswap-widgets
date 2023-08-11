export declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    [x: string]: never;
    routing: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs | typeof import("@reduxjs/toolkit/dist/query").skipToken, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./routing/types").GetQuoteArgs, import("./routing/types").GetQuoteResult, unknown, {}, {}>, never, import("./routing/types").GetQuoteResult | undefined, "routing">;
    }, never, "routing">;
}>, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    [x: string]: never;
    routing: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs | typeof import("@reduxjs/toolkit/dist/query").skipToken, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./routing/types").GetQuoteArgs, import("./routing/types").GetQuoteResult, unknown, {}, {}>, never, import("./routing/types").GetQuoteResult | undefined, "routing">;
    }, never, "routing">;
}>, import("redux").AnyAction, undefined>, import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    getQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs | typeof import("@reduxjs/toolkit/dist/query").skipToken, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./routing/types").GetQuoteArgs, import("./routing/types").GetQuoteResult, unknown, {}, {}>, never, import("./routing/types").GetQuoteResult | undefined, "routing">;
}, string, "routing">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>]>>;
