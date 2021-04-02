var majorityElement = function(nums) {
    nums.sort((a,b)=>(a-b));
    let temp=[0,nums[0]];//이전 배열이 끝난 시점, 이때까지 나왔던 친구 이름
    let ret=[0,0];//이때까지 가장 길었던 친구길이, 친구 이름
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=temp[1]){
            if(i-temp[0]>ret[0]){
                ret[0]=i-temp[0];
                ret[1]=temp[1];
            }
            if(ret[0]>nums.length/2){
                return ret[1];
            }
            temp[1]=nums[i]
            temp[0]=i
        }
        console.log(temp,ret)
    }
    if(nums.length-temp[0]>ret[0]){
        ret[0]=nums.length-temp[0];
        ret[1]=temp[1];
    }
    return ret[1];
};

console.log(majorityElement([2,2,1,1,1,2,2]))