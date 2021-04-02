function solution(n) {
    let ret=n+1
    let contOne=n.toString(2).split('').map(v=>+v).reduce((a,b)=>(a+=b),0)
    while(true){
        if(contOne==ret.toString(2).split('').map(v=>+v).reduce((a,b)=>(a+=b),0)){
            break;
        }
        ret++
    }
    
    return ret
}
console.log(solution(78	))

/**
 *     var answer = 0;
    n=n.toString(2).split('').map(v=>+v)
    if(n.length==n.reduce((a,b)=>(a+=b),0)){
        n.splice(1,0,0)
        return parseInt(n.join(''),2)
    }   
    if(n.length-1==n.reduce((a,b)=>(a+=b),0)&&n[n.length-1]==0){
        n.splice(1,0,0)
    }   
    console.log(n)

    return answer;
 */