import {HeapNode} from "./heapNode";
/**
 * A heap is a special tree-based data structure that satisfies the heap property. The heap property is the relationship
 * between parent and child nodes. In a min-heap, the parent's node value is less than or equal to its children. In a
 * max-heap, the opposite is true.
 *
 * Inserting a node: insert the node at the end of the heap (bottom level, right-most slot). This maintains the complete
 * binary tree property of heaps. Then bubble the inserted node up, comparing its value to that of the parent, and swapping
 * it with the parent node if it is less.
 *
 * Inserting a node into a max-heap is the same, except the bubble-up process (heapify) uses the opposite comparison to
 * the min-heap.
 *
 * A priority queue is a specific use case of a heap.
 */

export class MinHeap {
    root: HeapNode;

    /**
     * findInsertionParent takes the root node of a heap and returns the insertion node, if it exists.
     */
    public findInsertionParent(): HeapNode | null {
        if (!this.root) return null;

        const queue: HeapNode[] = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            // this error is likely to not throw since we check the queue length
            if (!current) throw new Error("unexplained empty queue");

            if (!current.left || !current.right) {
                return current;
            }

            queue.push(current.left);
            queue.push(current.right);
        }

        return null;
    }

    /**
     * insert takes a value and inserts it into the heap.
     */
    public insert(value: number): HeapNode {
        const insertionNode: HeapNode | null = this.findInsertionParent();
        if (!insertionNode) throw new Error("insertion node was null");
        const newNode: HeapNode = new HeapNode(value);
        if (!insertionNode.left) {
            insertionNode.left = newNode;
        } else if (!insertionNode.right) {
            insertionNode.right = newNode;
        } else {
            throw new Error("unexpected: insertion node had both children");
        }
        newNode.parent = insertionNode;
        return newNode;
    }

    /**
     * heapifyMin takes the inserted node of a heap and performs the heapify function, bubbling up the node according to
     * the min-heap property. Returns the root node.
     */
    public heapifyMin(node: HeapNode): HeapNode {
        let current: HeapNode = node;

        while (current.parent && current.value < current.parent.value) {
            // swap current node and parent values
            [current.value, current.parent.value] = [current.parent.value, current.value];
            current = current.parent;
        }

        return current
    }

    constructor(value: number) {
        this.root = new HeapNode(value);
    }
}