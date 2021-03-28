var countRangeSum = function(nums, lower, upper) {
    nums.sort((a,b)=>(a-b))
    let lowIndex=0
    let hiIndex=0
    let lo=0;
    let hi=nums.length-1;
    while(lo<hi){
        const mid=Math.floor((lo+hi)/2)
        if(nums[mid]>lower){
            hi=mid-1
        }else{
            lo=mid
        }
    }
    lowIndex=lo;
    lo=0;
    hi=nums.length-1;
    while(lo<hi){
        const mid=Math.floor((lo+hi)/2)
        if(nums[mid]<upper){
            lo=mid+1
        }else{
            hi=mid
        }
    }
    hiIndex=lo;
    console.log(nums)
    if(nums[lowIndex]!=lower){
        nums.splice(lowIndex,0,lower)
        lowIndex--;
    }
    if(nums[hiIndex]!=upper){
        nums.splice(hiIndex,0,upper)
    }
    console.log(nums)
    nums=nums.slice(lowIndex,hiIndex+1)
    //console.log(nums)
    return nums.length
};

console.log(countRangeSum( [-2,5,-1],-2,2))