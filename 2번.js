function solution(s){
    var answer = true;

    s=s.split('');
    s=s.map(v=>v=='('?1:-1)
    console.log(s)
    let f=s.reduce((a,b)=>{
        a+=b;
        if(a<0){
            return false;
        }
        return a;
    },0)
    console.log(f)
    answer=f==0?true:false;    
    return answer;
}

console.log(solution("()()"))