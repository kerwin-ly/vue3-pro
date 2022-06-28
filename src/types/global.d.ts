// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type SafeAny = any;
declare type Recordable<T = SafeAny> = Record<string, T>;
declare type Fn = () => void;
