/**
 * Question: Minimum Edit Distance (Levenshtein Distance)
 *
 * Prompt:
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
 *
 * You may perform the following three operations on a character:
 *    •	Insert a character
 *    •	Delete a character
 *    •	Replace a character
 *
 *    Example:
 *    Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation:
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 *
 * Follow-up:
 *    •	Optimize the space complexity.
 *    •	Extend it to include transpositions (Damerau-Levenshtein).
 *    •	Handle Unicode or large inputs efficiently.
 */

/**
 * This is the Levenshtein distance algorithm
 *
 * So we create a table dp of size (6 x 4) (because "horse" has 5 letters + 1 row for empty string, and "ros" has 3 letters + 1 column for empty string).
 *
 * 1. Base Cases (First row and column)
 *    •	dp[0][j] = j: To convert empty string "" to first j letters of word2, we need j insertions.
 *    •	dp[i][0] = i: To convert first i letters of word1 to empty string, we need i deletions.
 *
 * 2. Fill the DP Table
 *
 * For every pair of characters word1[i-1] and word2[j-1]:
 *    •	If they match → dp[i][j] = dp[i-1][j-1] (no extra operation)
 *    •	If they differ → Take the minimum of:
 *    •	dp[i-1][j] + 1 → Delete
 *    •	dp[i][j-1] + 1 → Insert
 *    •	dp[i-1][j-1] + 1 → Replace
 *
 * This builds up the solution from small subproblems.
 *
 * Using:
 *    •	rows = word1.length + 1
 *    •	cols = word2.length + 1
 *
 * makes dp[i][j] naturally mean:
 *
 * “Minimum edits to turn the first i characters of word1 into the first j characters of word2.”
 *
 * It flows nicely because the indexing logic matches the transformation you’re doing:
 *    •	i → how far into word1
 *    •	j → how far into word2
 */
export function minEditDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;

    // Create a (m+1) x (n+1) matrix
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Base cases: transforming from empty string
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i; // delete all characters from word1
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j; // insert all characters into word1
    }

    // Fill the DP matrix
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // Characters match, no operation needed
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,    // Delete
                    dp[i][j - 1] + 1,    // Insert
                    dp[i - 1][j - 1] + 1 // Replace
                );
            }
        }
    }

    return dp[m][n];
}

/**
 * An implementation that uses two arrays instead of a matrix for space optimization
 */
export function minEditDistanceSpaceOptimized(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;

    // Ensure word2 is shorter to use less memory
    if (n > m) return minEditDistanceSpaceOptimized(word2, word1);

    let prev = new Array(n + 1).fill(0);
    let curr = new Array(n + 1).fill(0);

    // Initialize base case
    for (let j = 0; j <= n; j++) {
        prev[j] = j;
    }

    for (let i = 1; i <= m; i++) {
        curr[0] = i;
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                curr[j] = prev[j - 1];
            } else {
                curr[j] = 1 + Math.min(
                    prev[j],     // delete
                    curr[j - 1], // insert
                    prev[j - 1]  // replace
                );
            }
        }
        [prev, curr] = [curr, prev]; // Swap rows
    }

    return prev[n];
}