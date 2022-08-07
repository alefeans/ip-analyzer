import { AbuseIPDBClient as client } from './client'
import { CheckIPScore } from '../../adapters/ip-scanner/types'

export type AbuseIPDBCheckAPIResponse = {
  data: {
    ipAddress: string,
    isPublic: boolean,
    ipVersion: 4 | 6,
    isWhitelisted: boolean,
    abuseConfidenceScore: number,
    countryCode: string,
    countryName?: string,
    usageType: string | null,
    isp: string,
    domain: string,
    hostnames: string[],
    totalReports: number,
    numDistinctUsers: number,
    lastReportedAt: string | null
  }
}

export const checkIPScore: CheckIPScore<AbuseIPDBCheckAPIResponse> = async (ip: string) => {
  const requestIP = encodeURI(ip)
  const checkRequest = `api/v2/check?ipAddress=${requestIP}`
  const { data } = await client.get<AbuseIPDBCheckAPIResponse>(checkRequest)
  return data
}
