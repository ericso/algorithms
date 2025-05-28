/**
 * Longest Continuous Substring problem
 *
 * Prompt: Given a string of length n, design an algorithm to find the longest, continuous substring consisting of m
 * distinct characters.
 *
 * Discussion: To solve the problem of finding the longest continuous substring with exactly m distinct characters, we
 * can use the sliding window technique with a hashmap (or dictionary) to track character counts.
 */

export function longestSubstringWithMDistinct(s: string, m: number): string {
    const n: number = s.length;
    if (m === 0 || n === 0) {
        return "";
    }

    let left: number = 0;
    let maxLen: number = 0;
    let startIndex: number = 0;
    const charCount: Record<string, number> = {};

    // both left and right pointers at zero, start by moving the right pointer
    for (let right: number = 0; right < n; right++) {
        const rightChar: string = s[right];
        charCount[rightChar] = (charCount[rightChar] || 0) + 1; // increment or initialize the character count

        // shrink the window until we have at most m distinct characters
        while (Object.keys(charCount).length > m) {
            const leftChar: string = s[left];
            charCount[leftChar] -= 1;
            if (charCount[leftChar] === 0) {
                delete charCount[leftChar];
            }
            left += 1;
        }

        // update the result only when we have exactly m distinct characters
        if (Object.keys(charCount).length === m) {
            const windowLen: number = right - left + 1;
            if (windowLen > maxLen) {
                maxLen = windowLen;
                startIndex = left;
            }
        }
    }
    return s.substring(startIndex, startIndex + maxLen);
}