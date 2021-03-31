function solution(p) {
    p=p.split('')
    let corArr=[];
    let incorArr=[];
    let divString=function (p,corArr,incorArr,startnum=0){
        let temp=0;
        let flag=1;
        for(let i=startnum;i<p.length;i++){
            if(p[i]=='(')temp++;
            if(p[i]==')')temp--;
            if(temp<0){
                flag=-1
            }
            if(temp==0){
                if(flag==1){
                    divString(p,corArr,incorArr,i)
                }else{
                    
                }
            }
        }

    }

    divString(p,corArr,incorArr)
    console.log(corArr)
    console.log(incorArr)
    var answer = '';
    return answer;
}

console.log(solution(
    
    "()))((()"
))