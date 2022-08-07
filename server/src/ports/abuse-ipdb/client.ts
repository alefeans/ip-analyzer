import axios from 'axios'
import config from '../../config/env-config'

export const AbuseIPDBClient = axios.create(
  {
    baseURL: 'https://api.abuseipdb.com/',
    timeout: 5000,
    headers: {
      'Key': config.ABUSE_IP_DB_KEY,
      'Accept': 'application/json'
    }
  }
)
