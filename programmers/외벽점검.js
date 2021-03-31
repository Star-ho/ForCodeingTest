function solution(n, weak, dist) {
    var answer = dist.length;
    let addWeak=[...weak];
    weak.forEach(v=>addWeak.push(v+n))
    addWeak.pop();
    dist.sort((a,b)=>(b-a));
    for(let i=weak.length-1;i>=0;i--){
        let temp=[];
        for(let j=0;j<weak.length;j++){
            temp.push(addWeak[j+i]-addWeak[j]+1)
        }
        console.log(temp)
        for(let j=0;j<dist.length;j++){
            let temp2=0
            for(let k=0;k<temp.length;k++){
                if(temp[k]<=dist[j]){
                    temp2=Math.max(temp2,temp[k])
                }
            }
            console.log(temp2)
            if(temp2!=0){
                dist.splice(j,1);
                let index=temp.indexOf(temp2)
                console.log(index,i)
                for(let k=i+1;k<=0;k--){
                    if(index+k>weak.length){
                        weak.splice(index+k-weak.length-1,1);
                        continue;
                    }
                    weak.splice(index+k,1)
                }
                
                weak.for
            }
        }
    }
    if(weak.length>dist.length){
        return -1
    }
    answer=answer-dist.length
    return answer;
}

console.log(solution(
    12, [1, 3, 4, 9, 10], [3, 5, 7]


))