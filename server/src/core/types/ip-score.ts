import * as t from 'io-ts'
import { publicIPCodec } from './public-ip'

export const ipScoreInputCodec = t.type({
  ip: publicIPCodec
})

export type IPScoreInput = t.TypeOf<typeof ipScoreInputCodec>

export const ipScoreCodec = t.type({
  ip: publicIPCodec,
  ipVersion: t.number,
  isPublic: t.boolean,
  country: t.string,
  reports: t.number,
  isp: t.string,
  usageType: t.string,
  domain: t.string,
  riskScore: t.number
})

export type IPScore = t.TypeOf<typeof ipScoreCodec>
