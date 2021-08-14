function solution(left, right) {
    var answer = 0;
    let arr=[]
    for(let i=left;i<=right;i++){
        let temp=[i]
        temp.push(divisors(i))
        arr.push(temp)
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i][1]%2==0){
            answer+=arr[i][0]
        }else{
            answer-=arr[i][0]
        }
    }
    return answer;
}

function divisors(integer) {
    let count=0
    for(var i=1; i<=integer; i++) {
        if(integer % i == 0) {
            count++
        }
    }
    return count
}

console.log(solution(


    13, 17
))