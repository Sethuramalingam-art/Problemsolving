// Largest Sum Contiguous Subarray (Kadane’s Algorithm)

//Given an array arr[] of size N.
// The task is to find the sum of the contiguous subarray within a arr[] with the largest sum.

var a = [-2, -3, 4, -1, -2, 1, 5, -3];

function maxSubArraySum(arr, n) {
  var max_so_far = Number.MIN_SAFE_INTEGER;
  var max_ending_here = 0;
  var start = 0,
    s = 0,
    end = 0;

  for (var i = 0; i < n; i++) {
    max_ending_here += arr[i];

    if (max_ending_here > max_so_far) {
      max_so_far = max_ending_here;
      start = s;
      end = i;
    }

    if (max_ending_here < 0) {
      max_ending_here = 0;
      s = i + 1;
    }
  }

  return [max_so_far, start, end];
}

console.log(maxSubArraySum(a, a.length));
