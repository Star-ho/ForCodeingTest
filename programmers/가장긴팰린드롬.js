function solution(s)
{
    var answer = 0;
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<=s.length;j++){
            //console.log(s.slice(i,j))
            if(isPalindrome(s.slice(i,j))){
                answer=Math.max(j-i,answer)
            }
        }
    }

    return answer;
}


function isPalindrome(str){
    for(let i=0;i<str.length/2;i++){
        if(str[i]!=str[str.length-i-1])
            return false
    }
    return true
}


console.log(solution("abacde"))
