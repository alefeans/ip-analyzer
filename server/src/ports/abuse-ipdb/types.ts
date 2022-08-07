export type AbuseIPDBCheckAPIResponse = {
  data: {
    ipAddress: string,
    isPublic: boolean,
    ipVersion: number,
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
    lastReportedAt: string | null,
  }
}
