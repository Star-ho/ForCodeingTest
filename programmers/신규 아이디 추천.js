function solution(new_id) {
    var answer = [];
    let allow_str='qwertyuiopasdfghjklzxcvbnm0123456789-_.'.split('')
    new_id=new_id.toLowerCase().split('')
    for(let i=0;i<new_id.length;i++){
        if(allow_str.indexOf(new_id[i])!=-1){
            answer.push(new_id[i])
        }
    }
    let temp=[]
    for(let i=0;i<answer.length;i++){
        if(answer[i]=='.'&&answer[i+1]=='.'){
            continue
        }
        temp.push(answer[i])
    }
    answer=temp.slice()
    if(answer[0]=='.')
        answer.shift()
    if(answer[answer.length-1]=='.')
        answer.pop()
    if(answer.length==0)
        answer=['a']
    if(answer.length>=16)
        answer=answer.slice(0,15)
    
    if(answer[answer.length-1]=='.')
        answer.pop()
    while(answer.length<3){
        answer.push(answer[answer.length-1])
    }
    return answer.join('')

    
}