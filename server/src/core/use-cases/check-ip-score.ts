import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { ipScoreInputCodec, IPScoreInput } from '../types/ip-score'
import { validateCodec } from '../../helpers/validate-codec'

export type ExternalIPScanner<A> = (input: IPScoreInput) => Promise<A>

type CheckIPScore = <A>(externalIPScanner: ExternalIPScanner<A>) =>
  (ip: IPScoreInput) => TE.TaskEither<Error, A>

export const checkIPScore: CheckIPScore = (externalIPScanner) => (input) => {
  return pipe(
    input,
    validateCodec(ipScoreInputCodec),
    TE.fromEither,
    TE.chain(() => TE.tryCatch(
      () => externalIPScanner(input),
      E.toError
    ))
  )
}
