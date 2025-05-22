import { MinHeap } from "./heap";
import { HeapNode } from "./heapNode";

/**
 * buildTestHeap is a test function that builds a heap that looks like the following:
 *
 *         5
 *        / \
 *       8  10
 *     / \
 *    12 15
 *
 *    The heap is a min-heap. The insertion node is the one with value 10.
 */


function buildTestHeap(): MinHeap {
    const heap = new MinHeap(5);
    heap.root.left = new HeapNode(8);
    heap.root.right = new HeapNode(10);
    heap.root.parent = null;

    heap.root.left.left = new HeapNode(12);
    heap.root.left.right = new HeapNode(15);
    heap.root.left.parent = heap.root;
    heap.root.right.parent = heap.root;
    heap.root.left.left.parent = heap.root.left;
    heap.root.left.right.parent = heap.root.left;

    return heap;
}

describe('Heap', () => {
    it('should find the correct insertion point', () => {
        const heap: MinHeap = buildTestHeap();
        const node: HeapNode | null = heap.findInsertionParent();
        expect(node).not.toBeNull();
        expect(node?.value).toEqual(10);
    });

    it('should correctly heapify; bubble up the inserted node', () => {
        const heap: MinHeap = buildTestHeap();
        const node: HeapNode | null = heap.findInsertionParent();
        expect(node).not.toBeNull();

        // check which child on insertion we can insert; insert a node of value 3, which should bubble to the very top
        if (node) {
            const insertion = heap.insert(3);
            const root: HeapNode = heap.heapifyMin(insertion);
            expect(root.value).toEqual(3);
        } else {
            throw new Error("unexpected: insertion node was null");
        }
    });
});
