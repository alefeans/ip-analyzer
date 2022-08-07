import { pipe } from 'fp-ts/function'
import { checkIPScore, ExternalIPScanner } from './check-ip-score'
import { IPScoreInput } from '../types/ip-score'
import { mapAll, unsafe } from '../../config/tests/helpers'

const ipScannerOk: ExternalIPScanner<string> = async (input) => {
  return `IP ${input.ip} is ok!`
}

const ipScannerFail: ExternalIPScanner<never> = async () => {
  throw new Error('External error')
}

const input: IPScoreInput = {
  ip: unsafe('1.1.1.1')
}

const inputWithInvalidIP: IPScoreInput = {
  ip: unsafe('1.1.1')
}

const inputWithPrivateIP: IPScoreInput = {
  ip: unsafe('192.168.0.1')
}

describe('IP Check Score', () => {
  it('Should check an IP address properly', async () => {
    return pipe(
      input,
      checkIPScore(ipScannerOk),
      mapAll(result => expect(result).toBe(`IP ${input.ip} is ok!`)),
    )()
  })

  it('Should not accept invalid IP address', async () => {
    return pipe(
      inputWithInvalidIP,
      checkIPScore(ipScannerOk),
      mapAll(result => expect(result).toEqual(new Error('Invalid Public IP Address'))),
    )()
  })

  it('Should not accept private IP address', async () => {
    return pipe(
      inputWithInvalidIP,
      checkIPScore(ipScannerOk),
      mapAll(result => expect(result).toEqual(new Error('Invalid Public IP Address'))),
    )()
  })

  it('Should return a Left if ip scanner throws an error', async () => {
    return pipe(
      input,
      checkIPScore(ipScannerFail),
      mapAll(result => expect(result).toEqual(new Error('External error'))),
    )()
  })
})
