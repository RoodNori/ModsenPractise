//задача в соответствии с первым вариантом

"use strict";

function getFactorial(n) {
    if (n === 1 || n === 0) return 1;

    return getFactorial(n - 1) * n;
}

console.log(getFactorial(10));//3628800