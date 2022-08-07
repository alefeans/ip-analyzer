import * as E from 'fp-ts/Either'
import { checkIPScore } from '../../../adapters/use-cases/check-ip-score'

export const score = async (request) => {
  const response = await checkIPScore(request)()
  return E.isRight(response) ? response.right : response.left
}
