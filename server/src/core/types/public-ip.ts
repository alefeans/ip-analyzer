import { isIP } from 'net'
import is_ip_private from 'private-ip'
import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

type PublicIPBrand = {
  readonly PublicIP: unique symbol
}

const isPublicIP = (value: string) => {
  return !!isIP(value) && !is_ip_private(value)
}

export const publicIPCodec = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, PublicIPBrand> => isPublicIP(value),
    'PublicIP'
  ),
  () => 'Invalid Public IP Address'
)

export type PublicIP = t.TypeOf<typeof publicIPCodec>
