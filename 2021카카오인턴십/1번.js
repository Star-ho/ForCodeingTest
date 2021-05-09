function solution(s) {
    let arr=['zero','one','two','three','four','five','six','seven','eight','nine']
    arr=arr.map((v,i)=>[v,i])
    var answer = 0;
    for(let i=0;i<arr.length;i++){
        let index=s.indexOf(arr[i][0])
        if(index!=-1){
            s=s.split('')
            s.splice(index,arr[i][0].length,arr[i][1])
            s=s.join('')
            i--
        }
    }
    answer=+s
    return answer;
}


console.log(solution(

    "23four5six7"
    ))