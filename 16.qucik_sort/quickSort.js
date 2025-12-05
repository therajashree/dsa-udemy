function pivot(arr, start = 0, end = arr.length+1) {
    let pivot = arr[start];
    let swapIdx = start;

    function swap(arr, i ,j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, swapIdx, start);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4,6,9,1,2,5,3]));

// node quickSort.js