/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*  
    before adding data to the map, check if the data difference between the current
    data and the target is in the map. If true return i, and the value of the 
    difference(the index in the array).
*/
var twoSum = function(nums, target) {
    var nMap = new Map();    
    for(let i =0; i< nums.length;i++){
        if(nMap.has(target - nums[i]))
            return [nMap.get(target-nums[i]), i];
        nMap.set(nums[i], i);
    }    
};