import Bee, { Job, DoneCallback } from 'bee-queue'

import { QueueInterface, QueuesType } from './queue.types'

import redisConfig from '../config/redis'
import NewOrderMail from '../app/jobs/NewOrder'
import { JobInterface } from 'src/app/jobs/jobs.types'

const jobs: JobInterface[] = [NewOrderMail]
class Queue implements QueueInterface {
  private queues: QueuesType = {};

  constructor () {
    this.init()
  }

  private init (): void {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig
        }),
        handle
      }
    })
  }

  public add (queue: string, data: {}): Promise<Job> {
    return this.queues[queue].bee.createJob(data).save()
  }

  public processQueue (): void {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key]

      bee.on('failed', this.handleFailure).process(handle)
    })
  }

  private handleFailure (job: Job, error: Error): void {
    console.log(`QUEUE ${job.queue.name} FAILED`, error)
  }
}

export default new Queue()
