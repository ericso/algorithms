import { GraphAdjList } from "./graph";

describe('Graph Adjacency List', () => {
    it('should correctly add edges to the graph', () => {
        const graph = new GraphAdjList(3);

        expect(() => {
            graph.addEdge(0, 3);
        }).toThrow(TypeError);

        expect(() => {
            graph.addEdge(0, 2);
        }).not.toThrow(TypeError);
    });
});

describe('Graph Adjacency List', () => {
    it('should correctly output the graph as a string', () => {
        const graph = new GraphAdjList(3);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        let out: string = graph.print();
        expect(out).toEqual("node: 0 - 2 | node: 1 - 2 | node: 2 - 0 | node: 2 - 1 | ");
    });
});

describe('Graph Adjacency List', () => {
    it('should correctly output the vertex cover as a string for an unconnected graph', () => {
        const graph = new GraphAdjList(2);
        let out: string = graph.printVertexCover();
        expect(out).toEqual("");
    });

    it('should correctly output the vertex cover as a string for a connected graph', () => {
        const graph = new GraphAdjList(4);
        graph.addEdge(0, 3);
        graph.addEdge(1, 3);
        graph.addEdge(2, 3);
        let out: string = graph.printVertexCover();
        expect(out).toEqual(" 0  3 ");
    });

    it('should correctly output the vertex cover as a string for a complex connected graph', () => {
        const graph = new GraphAdjList(5);
        graph.addEdge(0, 2);
        graph.addEdge(1, 4);
        graph.addEdge(2, 4);
        graph.addEdge(3, 4);
        let out: string = graph.printVertexCover();
        expect(out).toEqual(" 0  1  2  4 ");
    });

    it('should correctly output the vertex cover as a string for a complex connected graph again', () => {
        const graph = new GraphAdjList(6);
        graph.addEdge(0, 2);
        graph.addEdge(1, 4);
        graph.addEdge(2, 4);
        graph.addEdge(3, 4);
        graph.addEdge(3, 5);
        let out: string = graph.printVertexCover();
        expect(out).toEqual(" 0  1  2  3  4  5 ");
    });

    // The following two tests are for the minimum vertex cover, which is not yet implemented.
    // it('should correctly output the vertex cover (min)', () => {
    //     const graph = new GraphAdjList(6);
    //     graph.addEdge(0, 1);
    //     graph.addEdge(0, 2);
    //     graph.addEdge(0, 3);
    //     graph.addEdge(0, 4);
    //     graph.addEdge(0, 5);
    //     graph.addEdge(2, 1);
    //     let out: string = graph.printVertexCover();
    //     expect(out).toEqual(" 0  1 ");
    // });
    //
    // it('should correctly output the vertex cover (min)', () => {
    //     const graph = new GraphAdjList(6);
    //     graph.addEdge(0, 1);
    //     graph.addEdge(0, 2);
    //     graph.addEdge(1, 3);
    //     graph.addEdge(1, 2);
    //     graph.addEdge(2, 4);
    //     graph.addEdge(3, 4);
    //     graph.addEdge(3, 5);
    //     let out: string = graph.printVertexCover();
    //     expect(out).toEqual(" 1  2  3 ");
    // });
});