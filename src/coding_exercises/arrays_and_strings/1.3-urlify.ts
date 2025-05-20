/***

 Prompt: Write a method to replace all spaces in a string with `%20`.
 
 Source: Cracking the Coding Interview, 6th Edition, page 90, question 1.3
 */

export function urlify(input: string, len: number): string {
    // string fragment to replace
    const fragment = '%20';

    // split out string into array of input size
    let temp: string[] = input.split('', len);

    for (let i: number = 0; i < len; i++) {
        if (temp[i] === ' ') {
            temp[i] = fragment;
        }
    }
    return temp.join('');
}
