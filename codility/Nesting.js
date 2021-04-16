// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    S=S.split('');
    let res=0;
    for(let i=0;i<S.length;i++){
        if(S[i]=="("){
            res++;
        }else{
            res--;
        }
        if(res<0){
            return 0;
        }
    }
    return res==0?1:0
}
console.log(solution(

    "(()(())())"
))