/*
다시짜기
*/

var wiggleMaxLength = function(nums) {
    let wiggle=[];
    for(let i=0;i<nums.length-1;i++){
        wiggle.push(nums[i+1]-nums[i])
    }
    let count=0;
    let temp=wiggle[0]>0?-1:1;
    if(temp==0){
        count++
        temp=
    }
    for(let i=1;i<wiggle.length;i++){
        if(wiggle[i]==0){
            count++;
            continue;
        }
        if(temp>0){
            if(wiggle[i]>0){
                count++;
            }else{
                temp=-1;
            }
        }
        if(temp<0){
            if(wiggle[i]<0){
                count++;
            }else{
                temp=1;
            }
        }
    }
    console.log(count)
};

console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]))