function checjArrItem (arr) { 
    var zero=0; 
    var even=0; 
    var notEven=0; 
    for (var i = 0; i < arr.length; i++) { 
    if (arr[i] === 0) { 
    zero++; 
    console.log('Это нулевой элемент, его позиция: ', i, 'его значение:', arr[i]); 
    } else if (arr[i] % 2 === 0) { 
    even++; 
    console.log('Это четный элемент, его позиция: ', i, 'его значение:', arr[i]); 
    } else if (arr[i] % 2 !== 0) { 
    notEven++; 
    console.log('Это нечетный элемент, его позиция: ', i, 'его значение:', arr[i]); 
    } 
    } 
    return [even, notEven, zero]; 
    } 
    console.log(checjArrItem(arr)); 
    module.exports = checjArrItem;