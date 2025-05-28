
export class GraphAdjList {
    /**
     * Total number of nodes in the graph.
     *
     * @type {number}
     */
    nodeCount: number;

    /**
     * The adjacency list for the graph. The first array represents the originating nodes. The second array holds the
     * nodes to which the originating node is connected.
     *
     * @type {number[][]}
     */
    nodeList: number[][];

    /**
     * Constructs an instance of the class with a specified number of nodes.
     *
     * @param {number} a - The number of nodes to initialize.
     *                     Sets the `nodeCount` property and initializes the `nodeList` array with empty sub-arrays.
     * @return {void}
     */
    constructor(a: number) {
        this.nodeCount = a;
        this.nodeList = new Array(a);
        for (let i: number = 0; i < this.nodeList.length; i++) {
            this.nodeList[i] = [];
        }
    }

    /**
     * Adds an edge between two nodes in the graph. This function assumes the graph is undirected.
     * It connects the nodes by adding each node to the other's adjacency list.
     *
     * @param {number} a - The first node of the edge to be added.
     * @param {number} b - The second node of the edge to be added.
     * @return {void} Does not return any value.
     */
    addEdge(a: number, b: number) {
        if (a >= this.nodeCount || b >= this.nodeCount) {
            throw new TypeError("Input node referenced out of range");
        }
        this.nodeList[a].push(b);
        this.nodeList[b].push(a);
    }

    /**
     * Prints the graph as a list of connected nodes.
     *
     * @return {string} The adjacency list of the graph represented by a string.
     */
    print(): string {
        let out: string = "";
        for (let i: number = 0; i < this.nodeCount; i++) {
            for (let j: number = 0; j < this.nodeList[i].length; j++) {
                out = out.concat("node: " + i + " - " + this.nodeList[i][j] + " | ");
            }
        }
        return out;
    }

    /**
     * Prints the graph's vertex cover as a list of nodes. The vertex cover is the set of nodes that "covers"
     * the entire graph, meaning the set of nodes that touch every edge. This is NOT the minimum vertex cover.
     *
     * @return {string} The adjacency list of the graph represented by a string.
     */
    printVertexCover(): string {
        let out: string = "";

        // initialize a visited array to track which nodes have been visited
        let visited: boolean[] = new Array(this.nodeCount);
        for (let i: number = 0; i < this.nodeCount; i++) {
            visited[i] = false;
        }

        // go through each node...
        for (let i: number = 0; i < this.nodeCount; i++) {
            // if we have not visited that node...
            if (!visited[i]) {
                // go through its edges...
                for (let j: number = 0; j < this.nodeList[i].length; j++) {
                    // v is the node being visited (represented by a number)
                    let v: number = this.nodeList[i][j];
                    // if we have not visited the node on that edge, visit it, visit the current node, and break
                    // out of the inner loop, moving onto the next node
                    if (!visited[v]) {
                        visited[v] = true;
                        visited[i] = true;
                        break;
                    }
                }
            }
        }

        for (let i: number = 0; i < this.nodeCount; i++) {
            if (visited[i]) {
                out = out.concat(" " + i + " ");
            }
        }

        return out;
    }
}