import { api } from '..'

describe('api-test', () => {
  it('test return of API', () => {
    const lib = api()

    expect(lib.getData('xxx')).toBe('merhaba xxx')
  })
})
