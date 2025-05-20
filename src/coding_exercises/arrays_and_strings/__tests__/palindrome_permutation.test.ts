import {isPalindromePermutationCount, isPalindromePermutationSort} from '../palindrome_permutation';

describe('Palindrome Permutation', () => {
    it('should say that "taco cat" is a palindrome', () => {
        expect(isPalindromePermutationSort('taco cat')).toBeTruthy();
        expect(isPalindromePermutationCount('taco cat')).toBeTruthy();
    });

    it('should say that "atco cta", a permuation of "taco cat", is a palindrome', () => {
        expect(isPalindromePermutationSort('taco cat')).toBeTruthy();
        expect(isPalindromePermutationCount('taco cat')).toBeTruthy();
    });

    it('should say that "aabbaa" is a palindrome', () => {
        expect(isPalindromePermutationSort('aabbaa')).toBeTruthy();
        expect(isPalindromePermutationCount('aabbaa')).toBeTruthy();
    });

    it('should say that "aaaabb" is a palindrome', () => {
        expect(isPalindromePermutationSort('aaaabb')).toBeTruthy();
        expect(isPalindromePermutationCount('aaaabb')).toBeTruthy();
    });

    it('should say that "abcdefg" is not a palindrome', () => {
        expect(isPalindromePermutationSort('abcdefg')).toBeFalsy();
        expect(isPalindromePermutationCount('abcdefg')).toBeFalsy();
    });

    it('should say that the empty string is a palindrome', () => {
        expect(isPalindromePermutationSort('')).toBeTruthy();
        expect(isPalindromePermutationCount('')).toBeTruthy();
    });
});