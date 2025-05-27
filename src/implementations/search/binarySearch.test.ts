import {binarySearchIterative, binarySearchRecursive} from "./binarySearch";

describe('iterative binary search', () => {
    it('should find an element in an array of numbers', () => {
        const input: number[] = [0, 5, 6, 10, 12, 22, 42, 55, 73, 99];
        const target: number = 10;
        const output: number = binarySearchIterative(input, target);
        expect(output).toEqual(3);
    });

    it('should return -1 if element is not found', () => {
        const input: number[] = [0, 5, 6, 10, 12, 22, 42, 55, 73, 99];
        const target: number = 2;
        const output: number = binarySearchIterative(input, target);
        expect(output).toEqual(-1);
    });
});

describe('recursive binary search', () => {
    it('should find an element in an array of numbers', () => {
        const input: number[] = [0, 5, 6, 10, 12, 22, 42, 55, 73, 99];
        const target: number = 10;
        const output: number = binarySearchRecursive(input, target, 0, input.length-1);
        expect(output).toEqual(3);
    });

    it('should return -1 if element is not found', () => {
        const input: number[] = [0, 5, 6, 10, 12, 22, 42, 55, 73, 99];
        const target: number = 2;
        const output: number = binarySearchRecursive(input, target, 0, input.length-1);
        expect(output).toEqual(-1);
    });
})