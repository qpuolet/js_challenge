function sumOfTwo(array1, array2, x) {
    let res = array1.map(a1 => array2.map(a2 => a1+a2))
            .map(f1 => f1.filter(n => n === x))
                .filter(l => l.length>=1).length;
    return res > 0;
}


function sumOfTwo2(arr1, arr2, x){

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i]+arr2[j] === x) {
                return true;
            }
        }
    }
    return false;
}
