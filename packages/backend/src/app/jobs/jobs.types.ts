export interface JobInterface {
  key: string;
  handle(data: {}): Promise<void>
}
