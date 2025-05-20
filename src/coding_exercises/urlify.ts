/***

 Prompt: Write a method to replace all spaces in a string with `%20`.

 */

export function urlify(input: string, len: number): string {
    // string fragment to replace
    const fragment = '%20';

    // split out string into array of input size
    let temp = input.split('', len);

    for (let i = 0; i < len; i++) {
        if (temp[i] === ' ') {
            temp[i] = fragment;
        }
    }
    return temp.join('');
}
