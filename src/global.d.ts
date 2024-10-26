declare global {
  interface Fbq {
    (command: string, ...args: unknown[]): void;
    queue: Array<unknown[]>;
    loaded: boolean;
    version: string;
    callMethod?: (...args: unknown[]) => void;
  }

  interface Window {
    fbq: Fbq;
    _fbq?: Fbq;
  }
}

export {};
