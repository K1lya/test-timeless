export interface IApiResponse<T> {
  results: T[];
  info: {
    'seed': string;
    'results': number;
    'page': number;
    'version': string;
  }
}
