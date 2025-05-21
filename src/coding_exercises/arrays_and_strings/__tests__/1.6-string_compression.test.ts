import { stringCompression } from '../1.6-string_compression';

describe('String Compression', () => {
    it('should appropriately compress a string', () => {
        expect(stringCompression('aabcccccaaa')).toEqual('a2b1c5a3');
    });

    it('should compress a really long string', () => {
        expect(stringCompression('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toEqual('a70');
    });

    it('should compress a mixed case string', () => {
        expect(stringCompression('aaaAAAbCCDDDDDDddd')).toEqual('a3A3b1C2D6d3');
    });

    it('should return the original string if no compression is necessary', () => {
        expect(stringCompression('abcdefg')).toEqual('abcdefg');
    });
});