// Given an integer array ‘arr[]’ of size N, find the sum of all sub-arrays of the given array. 

// Examples: 

// Input: arr[] = {1, 2, 3}
// Output: 20
// Explanation: {1} + {2} + {3} + {2 + 3} + {1 + 2} + {1 + 2 + 3} = 20

// Input: arr[] = {1, 2, 3, 4}
// Output: 50

function sumOfSumArray(arr) {
    var temp, result = 0;
    for (var i=0;i<arr.length;i++) {
        temp = 0;
        for (var j=i;j<arr.length;j++) {
            temp+=arr[j]
            result+=temp
        }
    }
    return result
}


console.log(sumOfSumArray([1,2,3,4])) //O(N2)

function SubArraySum(arr, n)
{
    let result = 0;
  
    // Computing sum of
    // subarray using formula
    for(let i = 0; i < n; i++)
        result += (arr[i] * (i + 1) *
                            (n - i));
  
    // Return all subarray sum
    return result ;
}

// Time complexity: O(N)
// Auxiliary Space: O(1)
