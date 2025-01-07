// Q: Given an array arr[] of size N, find the prefix sum of the array
// prefix[i] = arr[0]+arr[1]+...arr[i]
// prefix.length === arr.length
// eg: Input: [10,20,15,5,10]; Output: [10,30,45,50,60]

function findPrefix(numbers) {
    const prefixSum = new Array(numbers.length);
    prefixSum[0] = numbers[0]
    for (let i=1; i<numbers.length;i++) {
        prefixSum[i]=prefixSum[i-1]+numbers[i];
    }
    return prefixSum;
}
const input = [10,20,15,5,10];
console.log(findPrefix(input));
