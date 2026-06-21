export interface ErrorType {
  readonly message: string;
  readonly messageError?: string;
  readonly code?: string;
  readonly response: {
    readonly status?: string;
    readonly data?: Record<string, string[]>;
  };
}

export interface RejectedDataType {
  readonly messageError: string;
  readonly status?: string | number;
  readonly data?: Record<string, string[]>;
  readonly code?: string;
}
