export type IP = string

export type IPCheckScore = {
  ip: IP,
  ipVersion: 4 | 6,
  isPublic: boolean,
  country: string,
  reports: number,
  isp: string,
  usageType: string,
  domain: string,
  riskScore: number,
}
