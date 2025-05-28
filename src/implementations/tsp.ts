/**
 * Solves the Traveling Salesperson Problem (TSP) using brute force by calculating
 * all possible permutations of city visitation orders. Returns the path with
 * the minimum travel cost and its associated cost.
 *
 * @param {number[][]} distanceMatrix A 2D array where the value at index [i][j]
 * represents the distance or cost of traveling from city i to city j.
 *
 * @return {{ path: number[], cost: number }} An object containing the optimal path
 * as an array of city indices (starting and ending at city 0) and the minimum travel cost associated with this path.
 */
export function tspBruteForce(distanceMatrix: number[][]): { path: number[], cost: number } {
    const n: number = distanceMatrix.length; // number of cities
    /**
     * The following is a compact way of generating an array of numbers representing cities.
     * Here is a more readable way of doing this:
     *
     * const cities: number[] = [];
     * for (let i = 1; i < n; i++) {
     *   cities.push(i);
     * }
     */
    const cities: number[] = Array.from({ length: n - 1 }, (_, i) => i + 1);

    let minCost = Infinity;
    let bestPath: number[] = [];

    for (const perm of permutations(cities)) {
        let cost: number = distanceMatrix[0][perm[0]];
        for (let i: number = 0; i < perm.length - 1; i++) {
            cost += distanceMatrix[perm[i]][perm[i + 1]];
        }
        cost += distanceMatrix[perm[perm.length - 1]][0]; // Return to start

        if (cost < minCost) {
            minCost = cost;
            bestPath = [0, ...perm, 0];
        }
    }

    return { path: bestPath, cost: minCost };
}

/**
 * Generates all possible permutations of an array.
 *
 * @param {number[]} arr - The input array for which permutations are to be generated.
 * @return {Generator<number[]>} A generator that yields permutations of the input array as arrays of numbers.
 */
export function* permutations(arr: number[]): Generator<number[]> {
    if (arr.length === 0) yield [];
    for (let i: number = 0; i < arr.length; i++) {
        const rest: number[] = arr.slice(0, i).concat(arr.slice(i + 1)); // slice out number at index i
        for (const perm of permutations(rest)) {
            yield [arr[i], ...perm];
        }
    }
}