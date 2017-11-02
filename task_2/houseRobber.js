function houseRobber(nums) {
    if(nums.length === 0){
        return nums[0];
    } else if(nums.length === 1) {
        return Math.max(nums[0], nums[1])
    } else {
        let res = [nums[0], Math.max(nums[0], nums[1])]
        for(let i = 2; i < nums.length; i++){
            res.push(Math.max(nums[i] + res[i-2], res[i-1]));
        }
        return res[res.length-1];
    }
}
