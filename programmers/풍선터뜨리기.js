function solution(a) {
    var answer = 0;
    let temp=a[0];
    for(let i=0;i<a.length;i++){
        if(a[i]<=temp){
            answer++;
            temp=a[i]
        }
    }
    temp=a[a.length-1]
    for(let i=a.length-1;i>=0;i--){
        if(a[i]<=   temp){
            answer++;
            temp=a[i]
        }
    }
    return answer-1;
}

console.log(solution([-16,27,65,-2,58,-92,-71,-68,-61,-33]))