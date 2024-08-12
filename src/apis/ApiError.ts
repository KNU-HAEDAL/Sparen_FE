interface ApiErrorProps {
  errorCode: string;
  message: string;
}

export class ApiError extends Error {
  errorCode: string;
  message: string;
  constructor({errorCode, message}: ApiErrorProps) {
    super(message);
    this.errorCode = errorCode;
    this.message = message;
  }
}