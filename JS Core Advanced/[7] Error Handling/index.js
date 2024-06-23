//задача в соответствии с первым вариантом

function checkNumber(n) {
    try {
        if (n % 1 !== 0) throw new Error('не является целым');
        console.log(`${n} является целым`);
    }
    catch (err) {
        console.log(`${n} ${err.message}`);
    }
}

checkNumber(1.1);//false
checkNumber(11);//true