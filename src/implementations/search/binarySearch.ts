
/**
 * Performs an iterative binary search on a sorted array to find the index of a target element.
 * If the target element is not found, returns -1.
 *
 * @param {number[]} arr - The sorted array to search within.
 * @param {number} target - The number to search for in the array.
 * @return {number} The index of the target element if found; otherwise, -1.
 */
export function binarySearchIterative(arr: number[], target: number): number {
    let low: number = 0;
    let high: number = arr.length - 1;
    let mid: number;

    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);

        // return here if we find the target
        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    // return here if we did not find the target
    return -1;
}

/**
 * Performs a recursive binary search to find the index of a target value within a sorted array.
 *
 * @param {number[]} arr - The sorted array to be searched.
 * @param {number} target - The value to be located within the array.
 * @param {number} low - The starting index of the current search range.
 * @param {number} high - The ending index of the current search range.
 * @return {number} The index of the target value if found; otherwise, -1 if the target is not present in the array.
 */
export function binarySearchRecursive(arr: number[], target: number, low: number, high: number): number {
    if (high >= low) {
        const mid: number = low + Math.floor((high - low) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (target < arr[mid]) {
            return binarySearchRecursive(arr, target, low, mid - 1);
        }
        return binarySearchRecursive(arr, target, mid + 1, high);
    }

    // we did not find the target
    return -1;
}