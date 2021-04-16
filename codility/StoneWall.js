function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack=[]
    let res=0;
    for(let i=0;i<H.length;i++){
        while(H[i]<stack[stack.length-1]){
            stack.pop()
        }
        if(stack[stack.length-1]==H[i]){
            continue;
        }
        stack.push(H[i])
        res++
    }
    return res;
}

console.log(
    solution(
        [8, 8, 5, 7, 9, 8, 7, 4, 8]
    )
)