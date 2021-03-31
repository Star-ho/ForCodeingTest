function solution(n, times) {
    var answer = -1;
    times.sort((a,b)=>(a,b));
    let maxTime=times[times.length-1]*n;
    let minTime=0;
    while(minTime<maxTime){
        const mid=Math.floor((maxTime+minTime)/2)
        let num=0
        for(let i=0;i<times.length;i++){
            num+=Math.floor(mid/times[i]);
        }
        if(num>=n){
            if(answer==-1){
                answer=mid;
            }else{
                answer=Math.min(answer,mid);
            }
            maxTime=mid
        }else if(num<n){
            minTime=mid+1                
        } 
        //console.log(maxTime,minTime,mid,num)
    }
    //console.log(minTime)
    return answer
}

console.log(solution(6,[7, 10]))