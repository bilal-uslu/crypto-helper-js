import CryptoHelperJs from '../dist/index'

describe('crypto-helper-js-test', () => {
    it('gets dogs', () => {
        expect(CryptoHelperJs.api('test')).toEqual('encrypted (todo) : test');
    })


})