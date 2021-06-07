import { ABC } from './types/abc'

/**
 * @param plain is text to encrypt
 * @returns encrypted text
 */
// export default function api(plain: string): string {
//   return `encrypted (todo) : ${plain}`;
// }

export default function api(): ABC {
  const getData = (x: string): string => {
    return `merhaba ${x}`
  }

  const _api = {
    getData
  } as ABC
  return _api
}
