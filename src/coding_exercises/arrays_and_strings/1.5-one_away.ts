/**
 There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a
 character. Given two strings, write a function to check if they are one edit (or zero edits) away.

 EXAMPLE
 pale, ple → true
 pales, pale → true
 pale, bale → true
 pale, bake → false

 Hints: #23, #97, #130

 Source: Cracking the Coding Interview, 6th Edition, page 91, question 1.5

 Discussion
    If the difference in lengths between the two strings are greater than two, then there is more than one edit
     necessary; we return false in this case.

    Iterate over each string simultaneously and check each position that the characters are the same. If they are not,
     then increment the counter of the string that is longer. If both strings are the same length, increment both
     counters. Keep iterating, and if there is another mismatch, return false. Return true if we iterate to the end.

 Assumptions
    The input strings don't contain whitespace.
 */

export function oneAway(in1: string, in2: string): boolean {
    let temp1: string[] = in1.split('');
    let temp2: string[] = in2.split('');

    const temp1Len: number = temp1.length;
    const temp2Len: number = temp2.length;

    // shortcut: if the diff in lengths is greater than 1, then we require more than one edit
    if (Math.abs(temp1Len - temp2Len) > 1) {
        return false;
    }

    let editCount: number = 0;
    let temp1Ptr: number = 0;
    let temp2Ptr: number = 0;
    while (temp1Ptr < temp1Len && temp2Ptr < temp2Len) {
        if (temp1[temp1Ptr] !== temp2[temp2Ptr]) {
            // mismatch!
            if (temp1Len === temp2Len) {
                temp1Ptr++;
                temp2Ptr++;
            } else if (temp1Len > temp2Len) {
                temp1Ptr++;
            } else {
                temp2Ptr++;
            }

            editCount++;
            if (editCount > 1) {
                return false;
            }
        } else {
            // no mismatch, increment both pointers
            temp1Ptr++;
            temp2Ptr++;
        }
    }
    return true;
}