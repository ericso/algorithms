export class HeapNode {
    value: number;
    left: HeapNode | null = null;
    right: HeapNode | null = null;
    parent: HeapNode | null = null;

    constructor(value: number, parent: HeapNode | null = null) {
        this.value = value;
        this.parent = parent;
    }
}