function containsDuplicates(anyArray){
    //To check for dublicates remove dublicates and compare the length before and after
    //The Set object lets you store unique values of any type, whether primitive values or object references
    //A value in the set may only occur once
    if(anyArray.length !== new Set(anyArray).size) {
        return true
    }
    return false;
}


const arr1 = ['a', 'b', 'a'];

console.log(containsDuplicates(arr1))



