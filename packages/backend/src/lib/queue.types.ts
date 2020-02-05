import BeeQueue, { Job } from 'bee-queue'

export interface QueuesType {
  [prop: string]: {
    bee: BeeQueue;
    handle(data: {} | undefined): void
  }
}

export interface QueueInterface {
  add(queue: string, data: {}): Promise<Job>;
  processQueue(): void
}
