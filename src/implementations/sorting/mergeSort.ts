/**
 * Performs a recursive merge sort on an array of numbers. The method divides the input
 * array into smaller subarrays, recursively sorts them, and merges the sorted
 * subarrays to produce the final sorted array.
 *
 * @param {number[]} unsorted - The array to sort.
 * @return {number[]} The sorted array after applying the merge sort algorithm.
 */
export function mergeSort(unsorted: number[]): number[] {
    if (unsorted.length <= 1) {
        return unsorted;
    }

    const middle: number = Math.floor(unsorted.length / 2);
    const left: number[] = unsorted.slice(0, middle);
    const right: number[] = unsorted.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges two sorted arrays into one sorted array. The input arrays must be sorted.
 *
 * @param {number[]} left - The first sorted array.
 * @param {number[]} right - The second sorted array.
 * @return {number[]} A new array containing all elements from both input arrays, sorted in ascending order.
 */
export function merge(left: number[], right: number[]): number[] {
    let resultArray: number[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}