import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import { publicIPCodec } from './public-ip'
import { mapAll, getErrorMessage } from '../../config/tests/helpers'

describe('Public IP Address Validation', () => {
  it('Should validate public IP address properly', async () => {
    return pipe(
      '1.1.1.1',
      publicIPCodec.decode,
      TE.fromEither,
      mapAll(result => expect(result).toBe('1.1.1.1'))
    )()
  })

  it('Should return error when IP address is invalid', async () => {
    return pipe(
      '1.1.1',
      publicIPCodec.decode,
      TE.fromEither,
      mapAll(errors => expect(getErrorMessage(errors)).toBe('Invalid Public IP Address'))
    )()
  })

  it('Should return error when IP address is private', async () => {
    return pipe(
      '192.168.0.1',
      publicIPCodec.decode,
      TE.fromEither,
      mapAll(errors => expect(getErrorMessage(errors)).toBe('Invalid Public IP Address'))
    )()
  })
})

