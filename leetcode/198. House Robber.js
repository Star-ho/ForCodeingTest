var rob = function(nums) {
    if(nums.length==0)return 0;
    if(nums.length==1)return nums[0]
    if(nums.length==2)return nums[0]>nums[1]?nums[0]:nums[1];
    let arr=Array.from({length:nums.length})
    arr[0]=nums[0]
    arr[1]=nums[0]>nums[1]?nums[0]:nums[1];
    for(let i=2;i<arr.length;i++){
        arr[i]=Math.max(arr[i-2]+nums[i],arr[i-1])
    }
    return arr[arr.length-1]
};

console.log(rob([2,7,9,3,1]))