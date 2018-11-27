/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let tmp = {};
    for (let i = 0; i < nums.length; i++) {
        // for (let j = i+1; j < nums.length; j++)
        if (tmp[target -nums[i]] != undefined) {
            result.push(tmp[target - nums[i]]);
            result.push(i);
            break;
        }
        tmp[nums[i]] = i;
    }
    return result;
};