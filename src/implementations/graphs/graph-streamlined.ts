/**
 * This is a more streamlined implementation of an undirected graph, using adjacency lists to represent edges.
 */
export type Graph = { [node: string]: string[] };

// Get all subsets of an array
export function getAllSubsets<T>(array: T[]): T[][] {
    const result: T[][] = [[]]; // initialize result to contain the empty set
    for (const item of array) {
        const length = result.length;
        for (let i = 0; i < length; i++) {
            result.push([...result[i], item]);
        }
    }
    return result;
}

// Check if a subset is a vertex cover
export function isVertexCover(subset: Set<string>, graph: Graph): boolean {
    const coveredEdges = new Set<string>();

    // populate coveredEdges
    // u is each node in the subset
    for (const u of subset) {
        // v is each node in the adjacency list for u
        for (const v of graph[u]) {
            const edge: string = [u, v].sort().join(',');
            coveredEdges.add(edge);
        }
    }

    // calculate the total number of unique edges in graph
    const allEdges = new Set<string>();
    for (const u in graph) {
        for (const v of graph[u]) {
            const edge = [u, v].sort().join(',');
            allEdges.add(edge);
        }
    }

    // subset is a vertex cover IF the two sets are the same size
    return coveredEdges.size === allEdges.size;
}

// Find minimum vertex cover
export function findMinimumVertexCover(graph: Graph): string[] {
    const nodes: string[] = Object.keys(graph);
    const allSubsets: string[][] = getAllSubsets<string>(nodes);

    let minCover: string[] = nodes; // initialize minCover to be the full set of nodes

    for (const subset of allSubsets) {
        if (subset.length >= minCover.length) continue;
        if (isVertexCover(new Set(subset), graph)) {
            minCover = subset;
        }
    }

    return minCover;
}