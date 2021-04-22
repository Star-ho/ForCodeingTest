function solution(s) {
    var answer = 0;
    s=s.split('')
    for(let i=0;i<s.length;i++){
        let temp=s.shift()
        s.push(temp)
        temp=s.slice()
        let stack=[]
        while(temp.length>0){
            stack.push(temp.shift())
            if(''+stack[stack.length-2]+stack[stack.length-1]=='()'||''+stack[stack.length-2]+stack[stack.length-1]=='{}'||''+stack[stack.length-2]+stack[stack.length-1]=='[]'){
                stack.pop()
                stack.pop()
            }
        }
        if(stack.length==0){
            answer++;
        }
    }
    return answer;
}