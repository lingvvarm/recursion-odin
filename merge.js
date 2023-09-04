"use strict"


function merge(left, right) {
    let res = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
          res.push(left[il++]);
        } else {
          res.push(right[ir++]);
        }
      }
    return res.concat(left.slice(il)).concat(right.slice(ir));
}

function merge_sort(arr) {
    if (arr.length < 2) return arr

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(merge_sort(left), merge_sort(right));
}


console.log(merge_sort([2, 1, 3, 5, 15, 5]));