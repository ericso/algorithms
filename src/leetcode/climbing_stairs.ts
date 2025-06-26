/**
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 *
 *
 * Example 1:
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *
 *
 * Constraints:
 *
 *     1 <= n <= 45
 */
export function climbStairs(n: number): number {
    if (n <= 1) return 1;

    let a = 1; // f(0)
    let b = 1; // f(1)

    for (let i = 2; i <= n; i++) {
        const next = a + b; // f(i) = f(i-1) + f(i-2)
        a = b;
        b = next;
    }

    return b;
}

function climbStairsRecurse(n: number): number {
    if (n <= 1) return 1;
    return climbStairsRecurse(n - 1) + climbStairsRecurse(n - 2);
}

function climbStairsRecurseMemo(n: number, memo: Record<number, number> = {}): number {
    if (n <= 1) return 1;
    if (memo[n]) return memo[n];

    memo[n] = climbStairsRecurseMemo(n - 1, memo) + climbStairsRecurseMemo(n - 2, memo);
    return memo[n];
}