//задача с соответствии с первым вариантом

function compareObjects(obj1, obj2) {
    for (let key in obj2) 
        if (!(key in obj1)) return false;
    return true;
}

let object1 = {
'x': 1,
'y': 2
}

let object2 = {
'x': 1,
'y': 1,
'z': 2
}

console.log(compareObjects(object1, object2));//false