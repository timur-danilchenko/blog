/** Type of error received after the request. */
export interface ErrorType {
  readonly message: string;
  readonly messageError?: string;
  readonly code?: string;
  readonly response: {
    readonly status?: string;
    readonly data?: Record<string, string[]>;
  };
}

/** Type of error sent to the storage. */
export interface RejectedDataType {
  readonly messageError: string;
  readonly status?: string | number;
  readonly data?: Record<string, string[]>;
  readonly code?: string;
}
