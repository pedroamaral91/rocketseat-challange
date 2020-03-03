import env from './env'

export default {
  host: env('REDIS_HOST'),
  port: env('REDIS_PORT')
}
