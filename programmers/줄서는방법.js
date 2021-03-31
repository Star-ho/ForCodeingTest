/**
 * [1,2,3,4]
 * 첫번째 수 = 5/3*2*1
 * answer.push(k/factorial(n-1))  5/(3*2*1)
 * k=k%(factorial(n-1)) - 5%(3*2*1)
 * 두번째 수 = 5/2*1
 * answer.push(k%factorial(n-1))  5%(2*1)
 * k=5%(3*2*1)
 * 세번째수 1/1
 * 
 */

function solution(n, k) {
    k=k-1
    var answer = [];
    let arr=Array.from({length:n},()=>0).map((v,i)=>v=i+1)
    let cur=0;
    let N=n;
    let temp=factorial(n-1)
    if(factorial(n)==k){
        return arr.sort((a,b)=>(b-a))
    }
    for(let i =n-1;i>=0;i--){
        temp=factorial(i)
        cur=Math.floor(k/temp);
        console.log(temp,k,cur,arr);
        answer.push(arr[cur]);
        arr.splice(cur,1);
        k=k%temp;
    }
    return answer;
}
console.log(solution(4,1))

function factorial(n){
    let res=1;
    for(let i=1;i<=n;i++)
        res=res*i;
    return res;
}