
/**
 1.7 Rotate Matrix:
 Given an image represented by an NXN matrix, where each pixel in the image is 4 bytes, write a method to rotate the
 image by 90 degrees. Can you do this in place?
 Hints: #51, #100
 pg 203

 Source: Cracking the Coding Interview, 6th Edition, page 91, question 1.7

 Discussion
 A matrix representing an image can be represented by a double array of booleans (boolean[][]). Rotating the matrix
 means each row becomes a column, with the direction of rotation determining whether the first row becomes the last or
 the first column in the rotated matrix. Brute force would have you creating a new matrix, reading each row of the old
 matrix and writing the values of that row to the end or the beginning of each row of the new matrix, depending on the
 direction of rotation.

 The way to do this is to transpose the matrix (change the rows to columns) and then reverse the order of elements in
 the rows. This is what I described above for the clockwise rotation. To do this in-place, assume a double array data
 structure, you swap boolean[i][j] with boolean[j][i], and then reverse each row.

 You don't need to implement the counter-clockwise rotation, as three CW rotations would give you one CCW rotation.

 NOTE: these methods ONLY work on square matrices.
 */
export function rotateMatrix(matrix: boolean[][]): boolean[][] {
    matrix  = transposeMatrix(matrix);
    matrix = reverseMatrix(matrix);
    return matrix;
}

export function transposeMatrix(matrix: boolean[][]): boolean[][] {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = i+1; j < matrix[i].length; j++) {
            let temp: boolean = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
}

export function reverseMatrix(matrix: boolean[][]): boolean[][] {
    for (let i: number = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
    return matrix;
}


