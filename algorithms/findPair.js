//Describe an algorithm in JavaScript that takes an unsorted array of integers as input and a target sum e.g. sum = 10.
// The algorithm should output an array containing pairs of elements from the input array that add up to the target sum e.g. 10.
// The order of the elements in each pair is flexible, and the algorithm can output any valid pair that meets the criteria. 
//If no pair with the given sum exists, the algorithm should return an empty array.

//e.g.
//For the input nums[] = [8, 7, 2, 5, 3, 1] and target sum = 10, 
//describe a valid output such as [8, 2] or [7, 3].


function findPair(numsArray, target) {
const pairsWithSum10 = [];

for(let i = 0; i < numsArray.length; i++){
    for(let j = i+1; j < numsArray.length; j++){
        const sum = numsArray[i] + numsArray[j];
        if (sum === target){
            pairsWithSum10.push([numsArray[i], numsArray[j]]);
        }
       
    }
}

return pairsWithSum10;
}


const nums = [1,2,3,4,6];
const numtarget = 10;

console.log(findPair(nums, numtarget))

