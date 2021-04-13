
function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let set=new Set;
    for(let i=0;i<A.length;i++){
        if(!set.has(A[i])){
            set.add(A[i]);
            if(set.size==X){
                return i
            }
        }
    }
    return -1
}


console.log(solution(

    5, [1, 3, 1, 4, 2, 3, 5, 4]


))