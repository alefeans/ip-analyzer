import AbuseIPDBClient from "../services/AbuseIPDBClient"
import is_ip_private from 'private-ip'

type IP = string

type IPVersion = 4 | 6

type AbuseIPDBCheckResponse = {
  data: {
    ipAddress: string,
    isPublic: boolean,
    ipVersion: IPVersion,
    isWhitelisted: boolean,
    abuseConfidenceScore: number,
    countryCode: string,
    countryName?: string,
    usageType: string,
    isp: string,
    domain: string,
    hostnames: string[],
    totalReports: number,
    numDistinctUsers: number,
    lastReportedAt: string
  }
}

type IPScore = {
  ip: IP,
  ipVersion: IPVersion,
  isPublic: boolean,
  country: string,
  reports: number,
  isp: string,
  usageType: string,
  domain: string,
  riskScore: number,
}

export const score = async ({ ip }: { ip: IP }): Promise<IPScore> => {

  if (is_ip_private(ip)) {
    throw new Error('Private IP Address')
  }

  const requestIP = encodeURI(ip)
  const checkRequest = `api/v2/check?ipAddress=${requestIP}`
  const { data: { data } } = await AbuseIPDBClient.get<AbuseIPDBCheckResponse>(checkRequest)
  return {
    ip: ip,
    ipVersion: data.ipVersion,
    isPublic: data.isPublic,
    country: data.countryName ? data.countryName : data.countryCode,
    reports: data.totalReports,
    isp: data.isp,
    usageType: data.usageType,
    domain: data.domain,
    riskScore: data.abuseConfidenceScore
  }
}
