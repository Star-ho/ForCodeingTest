function solution(n, words) {
    var answer = [0,0];
    let stack=[];
    stack.push(words[0])
    for(let i=1;i<words.length;i++){
        if(stack.includes(words[i])){
            answer[0]=(i+1)%n==0?n:(i+1)%n;
            answer[1]=Math.ceil((i+1)/n)
            break;
        }
        if(stack[i-1].slice(stack[i-1].length-1)!=words[i][0]){
            //console.log(stack,words[i],i+1)
            answer[0]=(i+1)%n==0?n:(i+1)%n;
            answer[1]=Math.ceil((i+1)/n)
            break;
        }
        stack.push(words[i]);
    }
    return answer;
}

console.log(solution(2,["hello", "one", "even", "never", "never", "world", "draw"]))