function solution(begin, target, words) {
    var answer = 0;
    if(!words.includes(target)){
        return 0;
    }
    
    if(target==begin){
        return 0;
    }
    let count=''
    words.unshift(begin)
    let cache=Array.from({length:words.length-1},()=>0)
    //console.log(words,1)
    let dfs=function(arr){
        let countNum=0;
        let queue=Array.from([]);
        queue.push(arr[0]);
        cache.push(arr[0]);
      //  console.log(arr,1)
        while(queue.length>0){
            let current=queue.shift()
            //console.log(current)
            if(count==current){
                count='';
                countNum++;
            }
            if(current==target){
                return countNum
            }
            let temp=words.filter(v=>isChange(v,current));
            for(let i =0;i<temp.length;i++){
                if(!cache.includes(temp[i])){
                    cache.push(temp[i])
                    queue.push(temp[i])
                    if(count==''){
                        count=temp[i];
                    }
                }
            }

        }
        return 0;
     }
     answer=dfs(words)
     return answer;
 
}


function isChange(begin,target){
    let count=0;
    for(let i =0;i<target.length;i++){
        if(!target.includes(begin[i])){
            count++
        }
        if(count>1){
            return false;
        }    
    }
    return true;
}

//console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log", "cog"]))
//console.log(solution())
console.log(solution("aaa","cdd",["aas","aad","aac","aaf","aab"
,"cas","ddb","cdb","cdd","cad"]))