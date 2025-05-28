import {longestSubstringWithMDistinct} from "./lcs";

describe('longestSubstringWithMDistinct', () => {
    it('should find the longest continuous substring consisting of 2 distinct characters', () => {
        const s = "abcbaaabac";
        const m = 2;
        expect(longestSubstringWithMDistinct(s, m)).toEqual("baaaba");
    });

    it('should find the longest continuous substring consisting of 3 distinct characters', () => {
        const s = "abcbadaabacc";
        const m = 3;
        expect(longestSubstringWithMDistinct(s, m)).toEqual("badaaba");
    });
});