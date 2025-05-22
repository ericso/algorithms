import { transposeMatrix, reverseMatrix, rotateMatrix } from '../1.7-rotate_matrix';

describe('Rotate Matrix', () => {
    it('should appropriately rotate an odd square matrix', () => {
        let input: boolean[][] = [[true, false, false], [true, false, false], [true, false, false]];
        let output:boolean[][] = [[true, true, true], [false, false, false], [false, false, false]];
        expect(rotateMatrix(input)).toEqual(output);
    });
    it('should appropriately rotate an odd square matrix with some other values', () => {
        let input: boolean[][] = [[true, false, true], [true, false, false], [false, false, true]];
        let output:boolean[][] = [[false, true, true], [false, false, false], [true, false, true]];
        expect(rotateMatrix(input)).toEqual(output);
    });
    it('should appropriately rotate an even square matrix', () => {
        let input: boolean[][] = [[true, false, false, false], [true, false, false, false], [true, false, false, false],  [true, false, false, false]];
        let output:boolean[][] = [[true, true, true, true], [false, false, false, false], [false, false, false, false], [false, false, false, false]];
        expect(rotateMatrix(input)).toEqual(output);
    });
    it('should appropriately rotate an even square matrix with some other values', () => {
        let input: boolean[][] = [[true, false, true, false], [false, false, false, false], [true, false, false, true],  [true, false, false, false]];
        let output:boolean[][] = [[true, true, false, true], [false, false, false, false], [false, false, false, true], [false, true, false, false]];
        expect(rotateMatrix(input)).toEqual(output);
    });
});


describe('Transpose Matrix', () => {
    it('should appropriately transpose an odd square matrix', () => {
        let input: boolean[][] = [[true, false, false], [true, false, false], [true, false, false]];
        let output:boolean[][] = [[true, true, true], [false, false, false], [false, false, false]];
        expect(transposeMatrix(input)).toEqual(output);
    });
    it('should appropriately transpose an odd square matrix with some other values', () => {
        let input: boolean[][] = [[true, false, true], [true, false, false], [false, false, false]];
        let output:boolean[][] = [[true, true, false], [false, false, false], [true, false, false]];
        expect(transposeMatrix(input)).toEqual(output);
    });
    it('should appropriately transpose an even square matrix', () => {
        let input: boolean[][] = [[true, false, false, false], [true, false, false, false], [true, false, false, false],  [true, false, false, false]];
        let output:boolean[][] = [[true, true, true, true], [false, false, false, false], [false, false, false, false], [false, false, false, false]];
        expect(transposeMatrix(input)).toEqual(output);
    });
    it('should appropriately transpose an even square matrix with some other values', () => {
        let input: boolean[][] = [[true, false, true, false], [false, false, false, false], [true, false, false, true],  [true, false, false, false]];
        let output:boolean[][] = [[true, false, true, true], [false, false, false, false], [true, false, false, false], [false, false, true, false]];
        expect(transposeMatrix(input)).toEqual(output);
    });
});

describe('Reverse Matrix', () => {
    it('should appropriately reverse an odd square matrix', () => {
        let input: boolean[][] = [[true, false, false], [true, false, false], [true, false, false]];
        let output:boolean[][] = [[false, false, true], [false, false, true], [false, false, true]];
        expect(reverseMatrix(input)).toEqual(output);
    });
    it('should appropriately reverse an odd square matrix with some other values', () => {
        let input: boolean[][] = [[true, false, true], [true, false, false], [false, false, false]];
        let output:boolean[][] = [[true, false, true], [false, false, true], [false, false, false]];
        expect(reverseMatrix(input)).toEqual(output);
    });
    it('should appropriately reverse an even square matrix', () => {
        let input: boolean[][] = [[true, false, false, false], [true, false, false, false], [true, false, false, false],  [true, false, false, false]];
        let output:boolean[][] = [[false, false, false, true], [false, false, false, true], [false, false, false, true], [false, false, false, true]];
        expect(reverseMatrix(input)).toEqual(output);
    });
    it('should appropriately reverse an even square matrix with some other values', () => {
        let input: boolean[][] = [[true, false, true, false], [false, false, false, false], [true, false, false, true],  [true, false, false, false]];
        let output:boolean[][] = [[false, true, false, true], [false, false, false, false], [true, false, false, true], [false, false, false, true]];
        expect(reverseMatrix(input)).toEqual(output);
    });
});