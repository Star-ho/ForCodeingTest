function solution(distance, rocks, n) {
    var answer = 0;
    rocks=rocks.sort((a,b)=>(a-b));
    console.log(rocks)
    let lo=1;
    let hi=distance
    let ans=[];
    while(lo<hi){
        let rmCount=0;
        let prev=0;
        const mid=Math.floor((lo+hi)/2);
        for(let i=0;i<rocks.length;i++){
            if(mid>rocks[i]-prev){
                rmCount++;
            }else{
            prev=rocks[i]
        }
        }
        if(mid>distance-prev){

            rmCount++;
        }
        if(rmCount<=n){
            answer=Math.max(answer,mid)
            lo=mid+1
        }else{
            hi=mid
        }

    }
    return answer;
}

console.log(solution(25,[2, 14, 11, 21, 17],2))
