export type Method = (...args: any[]) => any;

export type GetMethodKeys<T> = { [K in keyof T]: T[K] extends Method ? K : never }[keyof T];
