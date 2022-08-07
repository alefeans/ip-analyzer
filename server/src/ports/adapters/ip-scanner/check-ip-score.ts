import { IPScoreInput } from '../../../core/types/ip-score'
import { ipScanner as api } from './api'

export const checkIPScore = async ({ ip }: IPScoreInput) => {
  return await api.checkIPScore(ip)
}