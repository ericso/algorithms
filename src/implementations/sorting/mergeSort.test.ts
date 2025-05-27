import { mergeSort } from "./mergeSort";

describe('MergeSort', () => {
    it('should properly sort an array of numbers', () => {
        const inputArray: number[] = [5, 0, 22, 99, 73, 42, 12, 6, 10, 55];
        const outputArray: number[] = mergeSort(inputArray);
        expect(outputArray).toEqual([0, 5, 6, 10, 12, 22, 42, 55, 73, 99])
    });

    it('should properly sort an array containing negative numbers', () => {
        const inputArray: number[] = [-5, 0, 22, 99, 73, 42, -12, 6, 10, -55];
        const outputArray: number[] = mergeSort(inputArray);
        expect(outputArray).toEqual([-55, -12, -5, 0, 6, 10, 22, 42, 73, 99])
    });

    it('should properly sort an array containing non-integer numbers', () => {
        const inputArray: number[] = [-5, 0, 22.9, 55.34, 99, 73, 72.9, 42, -12, 6, 10, -55];
        const outputArray: number[] = mergeSort(inputArray);
        expect(outputArray).toEqual([-55, -12, -5, 0, 6, 10, 22.9, 42, 55.34, 72.9, 73, 99])
    });

    it('should properly sort an empty array', () => {
        const inputArray: number[] = [];
        const outputArray: number[] = mergeSort(inputArray);
        expect(outputArray).toEqual([])
    });
});