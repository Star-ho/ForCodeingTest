function solution(cacheSize, cities) {
    var answer = 0;
    if(cacheSize==0)return cities.length*5
    cities=cities.map(v=>v.toUpperCase())
    console.log(cities)
    let cache=new Map();
    for(let i=0;i<cities.length;i++){
        if(cache.has(cities[i])){
            cache.set(cities[i],i)
            answer=answer+1
        }else{
            cache.set(cities[i],i);
            answer=answer+5;
            if(cache.size>cacheSize){
                let temp=['',i]
                for(let j of cache.entries()){
                    if(j[1]<temp[1]){
                        temp[0]=j[0]
                        temp[1]=j[1]
                    }
                }
                cache.delete(temp[0])
            }
        }
    }

    return answer;
}

console.log(solution(
    
    0, ["Jeju","Jeju","Jeju","Jeju","Jeju","Jeju","Jeju"]
))