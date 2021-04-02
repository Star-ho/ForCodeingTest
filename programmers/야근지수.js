function solution(n, works) {
    while(n>0){
        const curMax=Math.max(...works)
        const biggestIndex=works.map((v,i)=>v==curMax?i+1:0).filter(v=>v>0)
        console.log(works)
        console.log(curMax,biggestIndex)
        for(let i of biggestIndex){
            works[i-1]--;
            n--;
            if(n==0)
                return works.reduce((a,b)=>a+=Math.pow(b,2),0);
        }
        if(works[0]==0){
            if(works.reduce((a,b)=>a+=Math.pow(b,2),0)==0)
                return 0
        }
    }
    return works.reduce((a,b)=>a+=Math.pow(b,2),0);
}

console.log(solution(
    

    3, [1, 1]
))