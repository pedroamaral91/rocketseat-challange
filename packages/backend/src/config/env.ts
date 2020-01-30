import '../bootstrap'
export default function env (name: string): string {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing: process.env['${name}'].`)
  }

  return value
}
