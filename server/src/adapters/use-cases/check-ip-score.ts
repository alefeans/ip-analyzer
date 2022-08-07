import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import { IPScoreInput } from '../../core/types/ip-score'
import * as core from '../../core/use-cases/check-ip-score'
import * as api from '../ip-scanner'
import { checkIPScoreResponse } from '../ip-scanner/response'

export const checkIPScore = (data: IPScoreInput) => {
  return pipe(
    data,
    core.checkIPScore(api.checkIPScore),
    TE.map(checkIPScoreResponse),
  )
}
