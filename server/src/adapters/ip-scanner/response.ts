import { AbuseIPDBCheckAPIResponse } from '../../ports/abuse-ipdb/types'
import { IPScore } from '../../core/types/ip-score'

type CheckIPScoreResponse = (data: AbuseIPDBCheckAPIResponse) => IPScore

export const checkIPScoreResponse: CheckIPScoreResponse = ({ data }) => {
  return {
    ip: data.ipAddress,
    ipVersion: data.ipVersion,
    isPublic: data.isPublic,
    country: data.countryName ? data.countryName : data.countryCode,
    reports: data.totalReports,
    isp: data.isp,
    usageType: data.usageType ? data.usageType : 'Unknown',
    domain: data.domain,
    riskScore: data.abuseConfidenceScore
  }
}
