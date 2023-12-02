
function checkEmptyObject(obj){
    if(Object.keys(obj) == 0){
        return false
    } else {
        return true
    }
}


const emptyObject = {}
const students = { name: 'Antony'}


console.log(checkEmptyObject(emptyObject))