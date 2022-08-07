import { AbuseIPDBClient as client } from './client'
import { AbuseIPDBCheckAPIResponse } from './types'
import { CheckIPScore } from '../../adapters/ip-scanner/types'

export const checkIPScore: CheckIPScore<AbuseIPDBCheckAPIResponse> = async (ip: string) => {
  const requestIP = encodeURI(ip)
  const checkRequest = `api/v2/check?ipAddress=${requestIP}`
  const { data } = await client.get<AbuseIPDBCheckAPIResponse>(checkRequest)
  return data
}
