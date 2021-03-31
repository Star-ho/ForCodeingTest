function solution(A, B) {
    var answer = 0;
    A.sort((a,b)=>(a-b))
    B.sort((a,b)=>(a-b))
    let Bindex=0
    for(let i=0;i<A.length;i++){
        for(let j=Bindex;j<B.length;j++){
            if(A[i]<B[j]){
                Bindex=j+1;
                answer++;
                break;
            }
        }
    }
    return answer;
}

console.log(solution(	[5, 1, 3, 7], [2, 2, 6, 8] ))