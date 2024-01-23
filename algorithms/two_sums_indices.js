/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

const numMap = new Map(); // create a map to store the indices of numbers

for(let i = 0; i < nums.length; i++){ //loop through the array that is passed
    const missingNum = target - nums[i]; //inside the array get the missingNumber i.e. missingNum = target - nums[i]

    if (numMap.has(missingNum)){ //check if missing number is in the map
        return [numMap.get(missingNum), i]; //if found return it [valueOfMap, index] [0,1]
        break;
    }

    numMap.set(nums[i], i); //if not found store nums[i] which is the value as key and the current index as value set(key, value)

}

//if not solution return empty array
return [];

    
};

const num1 = [2,7,11,15];
const target1 = 9;

console.log(twoSum(num1, target1)); // Answer is [ 0, 1 ]


// the output of the map
// Map {
//     2 => 0,
//     7 => 1,
//     11 => 2,
//     15 => 3
//   }
