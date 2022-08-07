import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

type ENV = {
  ABUSE_IP_DB_KEY: string | undefined,
  PORT: string | undefined,
}

type Config = {
  ABUSE_IP_DB_KEY: string,
  PORT: string | undefined,
}

const getEnv = (): ENV => {
  return {
    ABUSE_IP_DB_KEY: process.env.ABUSE_IP_DB_KEY ? process.env.ABUSE_IP_DB_KEY : undefined,
    PORT: process.env.PORT ? process.env.PORT : '8000',
  }
}

const envToConfig = (env: ENV): Config => {
  for (const [key, value] of Object.entries(env)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`)
    }
  }
  return env as Config
}

const config = envToConfig(getEnv())

export default config
