export type Method = (...args: any[]) => any;

export type GetMethodKeys<T> = { [K in keyof T]: T[K] extends Method ? K : never }[keyof T];

export type GetParams<T extends (...args: any[]) => void> = T extends (...args: infer S) => void ? S : never;
export type GetLastParam<P extends any[]> = P extends [...any[], infer T] ? T : never;
