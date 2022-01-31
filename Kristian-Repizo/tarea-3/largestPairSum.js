function largestPairSum(nums){
    nums.sort((a,b) => b - a);
    return nums[0] + nums[1];
}

console.log(largestPairSum([88, 24, 33, 15, 27, 42]));