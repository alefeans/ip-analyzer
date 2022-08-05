type IP = string

type IPScore = {
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

export const score = (args: { ip: IP }): IPScore => {
  return {
    ip: args.ip,
    ipVersion: 4,
    isPublic: true,
    country: 'China',
    reports: 10,
    isp: 'Tencent Cloud Computing (Beijing) Co. Ltd',
    usageType: 'Data Center/Web Hosting/Transit',
    domain: 'tencent.com',
    riskScore: 90
  }
}
