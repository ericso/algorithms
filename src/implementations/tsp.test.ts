import {permutations, tspBruteForce} from "./tsp";

describe('tspBruteForce', () => {
    it('should find the optimal path and cost', () => {
        const distanceMatrix: number[][] = [
            [0, 10, 15, 20],
            [10, 0, 35, 25],
            [15, 35, 0, 30],
            [20, 25, 30, 0],
        ];

        const result: {path: number[], cost: number} = tspBruteForce(distanceMatrix);
        expect(result).toEqual({
            path: [0, 1, 3, 2, 0],
            cost: 80,
        });
    });
});

describe('permutations', () => {
    it('yield the proper permutations of a given input array', () => {
        const input: number[] = [1, 2, 3];
        const perm: Generator<number[]> = permutations(input);
        expect(perm.next()).toEqual({"done": false, "value": [1, 2, 3]});
        expect(perm.next()).toEqual({"done": false, "value": [1, 3, 2]});
        expect(perm.next()).toEqual({"done": false, "value": [2, 1, 3]});
        expect(perm.next()).toEqual({"done": false, "value": [2, 3, 1]});
        expect(perm.next()).toEqual({"done": false, "value": [3, 1, 2]});
        expect(perm.next()).toEqual({"done": false, "value": [3, 2, 1]});
        expect(perm.next()).toEqual({"done": true, "value": undefined});
    });
});
