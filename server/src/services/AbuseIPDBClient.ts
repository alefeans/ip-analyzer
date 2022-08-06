import config from "../config/envConfig"
import axios from 'axios'

const AbuseIPDBClient = axios.create(
  {
    baseURL: "https://api.abuseipdb.com/",
    timeout: 5000,
    headers: {
      'Key': config.ABUSE_IP_DB_KEY,
      'Accept': 'application/json'
    }
  }
)

export default AbuseIPDBClient