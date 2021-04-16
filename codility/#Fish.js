function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res=0
    while(A.length>0){
        while(B[0]==0){
            A.shift();
            B.shift();
            res++;
        }
        while(B[B.length-1]==1){
            A.pop();
            B.pop();
            res++;
        }
    return res;
}

console.log(
    solution(

        [4, 3, 2, 1, 5], [0, 1, 0, 0, 0]

    )
)