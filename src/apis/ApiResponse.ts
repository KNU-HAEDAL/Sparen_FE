export interface ApiResponse<T> {
  result: 'SUCCESS' | 'FAIL';
  data: T;
  message?: string;
  errorCodes?: string;
}