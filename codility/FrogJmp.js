function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let temp=Y-X/D;
    if(temp==Math.floor(temp)){
        return temp
    }else{
        return Math.floor()+1
    }
}


console.log(solution(10, 85, 30))