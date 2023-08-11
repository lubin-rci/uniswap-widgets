import { Component, ErrorInfo, PropsWithChildren } from 'react';
export declare type OnError = (error: Error, info: ErrorInfo) => void;
interface ErrorBoundaryProps {
    onError?: OnError;
}
declare type ErrorBoundaryState = {
    error: Error | null;
};
export default class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): import("react").ReactNode;
}
export {};
