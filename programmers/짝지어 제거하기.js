function solution(s)
{
    var answer = 0;
    s=s.split('');
    let stack=[];
    stack.push(s[0])
    let stLen=0;
    s.forEach((v,i)=>{
        if(i==0)return;
        stack.push(v);
        let flag=true;
        while(flag){
            flag=false;
            stLen=stack.length;
            if(stack[0]!=undefined&&stack[stLen-1]==stack[stLen-2]){
                stack.pop();
                stack.pop();
                flag=true;
            }
        }
        
    })
    answer=stack.length==0?1:0;
    return answer;
}

//console.log("baabaa")
console.log(solution("abcdaaaaaaaadcba"))