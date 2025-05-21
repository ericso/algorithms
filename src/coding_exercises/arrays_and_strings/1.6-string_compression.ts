/**
 1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated characters.
 For example, the string aabcccccaaa would become a2b1c5a3. If the “compressed” string would not become smaller than the
 original string, your method should return the original string. You can assume the string has only uppercase and
 lowercase letters (a - z).
 Hints: #92, #110
 pg 199

 Source: Cracking the Coding Interview, 6th Edition, page 91, question 1.6

 Discussion
 Iterate over the string and count the instances of a character until the character changes. When the character changes,
 write to an output string the character and the number of instances.
 */

export function stringCompression(input: string): string {
    let temp: string[] = input.split('');
    let output: string[] = [];

    let currChar: string = '';
    let count: number = 0;

    let allCountsOne: boolean = true;

    temp.forEach((char: string) => {
        // skip the first element
        if (currChar !== '') {
            // if the character changed, reset the count and append to the output
            if (char !== currChar) {
                output.push(currChar);
                output.push(count as unknown as string);

                // keep track of compressions; if all characters are count 1, then there's no need to compress
                if (count !== 1) {
                    allCountsOne = false;
                }
                count = 0;
            }
        }
        currChar = char;
        count++;
    })

    // push the last character
    output.push(currChar);
    output.push(count as unknown as string);
    if (count !== 1) {
        allCountsOne = false;
    }

    if (allCountsOne) {
        return input;
    }
    return output.join('');
}