/**

 Prompt: Given a string, write a function to check if it is a permutation of a palindrome.
 
 Source: Cracking the Coding Interview, 6th Edition, page 91, question 1.4

 Discussion
    A string is a permutation of a palindrome if the following are true:
    1. If the string is even, all characters in the string have a corresponding identical character, forming a pair.
    2. If the string is odd, 1. is true except there is one character that is single.
    
    One way to do this is to sort the string, and count that all characters are paired up for an even string, and that
    all characters are paired up except for one for an odd string. This would result in an NLogN runtime on account of
    the need to sort the string.
    
    Another way is to use a hashtable as a histogram to count each character. If all counts are even for an even string
    and all even except for one odd for an odd string, then the string is a permutation of a palindrome.
 */

function isEven(num: number): boolean {
    return num % 2 === 0;
}

/**
 * Implements the sort solution.
 */
export function isPalindromePermutationSort(input: string): boolean {
    // remove all spaces from the input
    let temp:string[] = input.trim().replace(/\s+/g, '').split('').sort();

    let count: number = 0;
    let oddCount: number = 0;
    let currChar: string = '';

    const inputEven: boolean = isEven(temp.length);

    for (let i: number = 0; i < temp.length; i++) {
        // handle first character in string
        if (i === 0) {
            currChar = temp[i];
            count++;
            continue
        }

        if (temp[i] === currChar) {
            count++;
        } else {
            // mismatching character, check the count and see if the count is even or odd
            // if the count is odd, and the string is even, then the string is not a permutation and return false
            // if the count is odd and the string is odd, then we are allowed one odd; increment the oddCount and check if we are over 1
            // if the count is even, then update the currChar, increment the count and continue

            if (!isEven(count) && inputEven) {
                return false;
            } else if (!isEven(count) && !inputEven) {
                oddCount++;
                if (oddCount > 1) {
                    return false;
                }
            }

            currChar = temp[i];
            count++;
        }
    }

    // if we iterate over the whole input string, and we do not return false then each character had a pair, with the
    // exception for a single character in the case of an odd length string
    return true;
}

/**
 * Implements the hashtable solution.
 */
export function isPalindromePermutationCount(input: string): boolean {
    // remove all spaces from the input
    let temp:string[] = input.trim().replace(/\s+/g, '').split('')

    const inputEven: boolean = isEven(temp.length);

    let counts: Map<string, number> = new Map<string, number>();

    temp.forEach((element: string) => {
        if (counts.has(element)) {
            let currCount: number | undefined = counts.get(element);
            if (currCount === undefined) {
                // this is an error case, because the value should have been set for this key
                throw new Error("Could not find a value for element '" + element + "'");
            }
            counts.set(element, currCount + 1)
        } else {
            counts.set(element, 1);

        }
    })

    let oddCount: number = 0;
    counts.forEach((value: number) => {
        if (!isEven(value)) {
            oddCount++;
        }
    })
    if (inputEven && oddCount > 0) {
        return false;
    } else if (oddCount > 1) {
        return false;
    }
    return true;
}