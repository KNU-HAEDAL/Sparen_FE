export default interface ApiResponse<T> {
  result: 'SUCCESS' | 'FAIL';
  data: T;
  message?: string;
  errorCode?: string;
}
