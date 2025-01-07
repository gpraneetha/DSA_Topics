// Q: Consider an array of size N with all initial values as 0. 
// Perform the given ‘m’ add operations from index ‘a’ to ‘b’ and 
// evaluate the highest element in the array. 
// An add operation adds 100 to all the elements from a to b (both inclusive). 

/* Example:Input: n = 5, m = 3 
a = 2, b = 4.
a = 1, b = 3.
a = 1, b = 2.
Output: 300
Explanation: 
After I operation – A[] = {0, 100, 100, 100, 0}
After II operation – A[] = {100, 200, 200, 100, 0}
After III operation – A[] = {200, 300, 200, 100, 0}
Highest element: 300 */

// Naive approach
function findHighestElementNaive(numbers, m) {

}

// Efficient
function findHighestElement(n, m, q) {
    let r = new Array(n+1).fill(0);
    // O(M)
    for (let i=0;i<q.length;i++) {
        r[q[i][0]] += 100;
        r[q[i][1]+1] -= 100;  
    }
    let prefixArr = new Array(n).fill(0);
    // calculate prefix
    prefixArr[0] = r[0];
    for (let i=1;i<n;i++) {
        prefixArr[i] = prefixArr[i-1] + r[i];
    }
    return Math.max(0,...prefixArr);
}
let maxValue = findHighestElement(5, 3, [[2,4],[1,3],[1,2]]);
console.log(maxValue);