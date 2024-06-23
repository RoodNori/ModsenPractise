//задача в соответствии с первым вариантом

function incrementMassiveByTenProcent(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += arr[i] * 0.1;
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

incrementMassiveByTenProcent(array);
console.log(array);//[1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11]