function mergeArrays(arr1, arr2) {
  var a1 = arr1.sort(function(a,b){return a-b;}), 
      a2 = arr2.sort(function(a,b){return a-b;}),
      i1 = 0, i2 = 0, res = [];
  
  while (i1 < a1.length && i2 < a2.length) {
    if (a1[i1] <= a2[i2]) {
      if (res.indexOf(a1[i1]) === -1) res.push(a1[i1++]);
      else i1++;
    }
    else if (res.indexOf(a2[i2]) === -1) res.push(a2[i2++]);
    else i2++;
  }
  
  while (i1 < a1.length) {
    if (res.indexOf(a1[i1]) === -1) res.push(a1[i1++]);
    else i1++;
  }
  
  while (i2 < a2.length) {
    if (res.indexOf(a2[i2]) === -1) res.push(a2[i2++]);
    else i2++;
  }
  
  return res;
}

/*
Merge two sorted arrays into one

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
*/