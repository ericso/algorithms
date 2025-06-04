import {minEditDistance, minEditDistanceSpaceOptimized} from "./edit_distance";

describe('Edit Distance', () => {
    it('should return the correct edit distance between two words', () => {
        expect(minEditDistance("horse", "ros")).toEqual(3);
        expect(minEditDistance("intention", "execution")).toEqual(5);
        expect(minEditDistance("none", "none")).toEqual(0);
        expect(minEditDistance("ab", "ac")).toEqual(1);
        expect(minEditDistanceSpaceOptimized("ab", "abc")).toEqual(1);
    });
});

describe('Edit Distance Space Optimized', () => {
    it('should return the correct edit distance between two words', () => {
        expect(minEditDistanceSpaceOptimized("horse", "ros")).toEqual(3);
        expect(minEditDistanceSpaceOptimized("intention", "execution")).toEqual(5);
        expect(minEditDistanceSpaceOptimized("none", "none")).toEqual(0);
        expect(minEditDistanceSpaceOptimized("ab", "ac")).toEqual(1);
        expect(minEditDistanceSpaceOptimized("ab", "abc")).toEqual(1);
    });
});
