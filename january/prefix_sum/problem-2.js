// Q: Given an array arr[] of size N. Given Q queries and in each query given L and R, Print the sum of array elements from index L to R.

function findPrefixSum(numbers,L,R) {
    let prefixSum = new Array(numbers.length);
    prefixSum[0] = numbers[0];
    for (let i=1;i<numbers.length;i++) {
        prefixSum[i] = prefixSum[i-1]+numbers[i];
    }
    if (L===0) return prefixSum[R];
    return prefixSum[R]-prefixSum[L-1];
}

const input = [ 3, 6, 2, 8, 9, 2 ]
console.log(findPrefixSum(input, 1, 2));

// TC: O(N)
// SC: O(N)