import { QueryFunction } from '../core/types';
import { UseQueryOptions, UseQueryResult } from './types';
declare type MAXIMUM_DEPTH = 20;
declare type GetOptions<T extends any> = T extends {
    queryFnData: infer TQueryFnData;
    error?: infer TError;
    data: infer TData;
} ? UseQueryOptions<TQueryFnData, TError, TData> : T extends {
    queryFnData: infer TQueryFnData;
    error?: infer TError;
} ? UseQueryOptions<TQueryFnData, TError> : T extends {
    data: infer TData;
    error?: infer TError;
} ? UseQueryOptions<unknown, TError, TData> : T extends [infer TQueryFnData, infer TError, infer TData] ? UseQueryOptions<TQueryFnData, TError, TData> : T extends [infer TQueryFnData, infer TError] ? UseQueryOptions<TQueryFnData, TError> : T extends [infer TQueryFnData] ? UseQueryOptions<TQueryFnData> : T extends {
    queryFn?: QueryFunction<infer TQueryFnData, infer TQueryKey>;
    select: (data: any) => infer TData;
} ? UseQueryOptions<TQueryFnData, unknown, TData, TQueryKey> : T extends {
    queryFn?: QueryFunction<infer TQueryFnData, infer TQueryKey>;
} ? UseQueryOptions<TQueryFnData, unknown, TQueryFnData, TQueryKey> : UseQueryOptions;
declare type GetResults<T> = T extends {
    queryFnData: any;
    error?: infer TError;
    data: infer TData;
} ? UseQueryResult<TData, TError> : T extends {
    queryFnData: infer TQueryFnData;
    error?: infer TError;
} ? UseQueryResult<TQueryFnData, TError> : T extends {
    data: infer TData;
    error?: infer TError;
} ? UseQueryResult<TData, TError> : T extends [any, infer TError, infer TData] ? UseQueryResult<TData, TError> : T extends [infer TQueryFnData, infer TError] ? UseQueryResult<TQueryFnData, TError> : T extends [infer TQueryFnData] ? UseQueryResult<TQueryFnData> : T extends {
    queryFn?: QueryFunction<any, any>;
    select: (data: any) => infer TData;
} ? UseQueryResult<TData> : T extends {
    queryFn?: QueryFunction<infer TQueryFnData, any>;
} ? UseQueryResult<TQueryFnData> : UseQueryResult;
/**
 * QueriesOptions reducer recursively unwraps function arguments to infer/enforce type param
 */
export declare type QueriesOptions<T extends any[], Result extends any[] = [], Depth extends ReadonlyArray<number> = []> = Depth['length'] extends MAXIMUM_DEPTH ? UseQueryOptions[] : T extends [] ? [] : T extends [infer Head] ? [...Result, GetOptions<Head>] : T extends [infer Head, ...infer Tail] ? QueriesOptions<[...Tail], [...Result, GetOptions<Head>], [...Depth, 1]> : unknown[] extends T ? T : T extends UseQueryOptions<infer TQueryFnData, infer TError, infer TData, infer TQueryKey>[] ? UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>[] : UseQueryOptions[];
/**
 * QueriesResults reducer recursively maps type param to results
 */
export declare type QueriesResults<T extends any[], Result extends any[] = [], Depth extends ReadonlyArray<number> = []> = Depth['length'] extends MAXIMUM_DEPTH ? UseQueryResult[] : T extends [] ? [] : T extends [infer Head] ? [...Result, GetResults<Head>] : T extends [infer Head, ...infer Tail] ? QueriesResults<[...Tail], [...Result, GetResults<Head>], [...Depth, 1]> : T extends UseQueryOptions<infer TQueryFnData, infer TError, infer TData, any>[] ? UseQueryResult<unknown extends TData ? TQueryFnData : TData, TError>[] : UseQueryResult[];
export declare function useQueries<T extends any[]>(queries: readonly [...QueriesOptions<T>]): QueriesResults<T>;
export {};
