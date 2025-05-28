import { Graph, getAllSubsets, findMinimumVertexCover } from "./graph-streamlined";

describe('getAllSubsets', () => {
    it('should correctly get all subsets', () => {
        const array = ['A', 'B', 'C'];
        const result = getAllSubsets(array)
        expect(result).toEqual(expect.arrayContaining([
            [],
            ['A'],
            ['B'],
            ['C'],
            ['A', 'B'],
            ['A', 'C'],
            ['B', 'C'],
            ['A', 'B', 'C']
        ]));
    });
});


describe('findMinimumVertexCover', () => {
    it('should correctly find the minimum vertex coverage for a graph', () => {
        const graph: Graph = {
            A: ['B', 'C'],
            B: ['A', 'C'],
            C: ['A', 'B']
        };
        const result = findMinimumVertexCover(graph);
        expect(result).toEqual(['A', 'B']);
    });

    it('should correctly find the minimum vertex coverage for a larger graph', () => {
        const graph: Graph = {
            A: ['B', 'C'],
            B: ['A', 'C', 'D'],
            C: ['A', 'B', 'E'],
            D: ['B', 'E', 'G'],
            E: ['C', 'D'],
            G: ['D'],
        };
        const result = findMinimumVertexCover(graph);
        expect(result).toEqual(['A', 'C', 'D']);
    });
});
