import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import { IPScoreInput, IPScore } from '../../core/types/ip-score'
import * as core from '../../core/use-cases/check-ip-score'
import * as api from '../ip-scanner/check-ip-score'

const checkIPScoreResponse = ({ data }): IPScore => {
  return {
    ip: data.ipAddress,
    ipVersion: data.ipVersion,
    isPublic: data.isPublic,
    country: data.countryName ? data.countryName : data.countryCode,
    reports: data.totalReports,
    isp: data.isp,
    usageType: data.usageType ? data.usageType : 'Unkown',
    domain: data.domain,
    riskScore: data.abuseConfidenceScore
  }
}

export const checkIPScore = (data: IPScoreInput) => {
  return pipe(
    data,
    core.checkIPScore(api.checkIPScore),
    TE.map(checkIPScoreResponse),
  )
}
