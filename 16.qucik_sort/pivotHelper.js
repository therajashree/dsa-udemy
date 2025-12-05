
function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    function swap(arr, i ,j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, swapIdx, start);
    return swapIdx;
}


console.log(pivotHelper([4,8,2,1,5,7,6,3]));

// node pivotHelper.js