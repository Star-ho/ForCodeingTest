/**
 * 첫번째거를 거슬러줘
 * 두번째거를 거슬러줘
 * 세번째거를 거슬러줘
 * 1
 * 11 2
 * 111 21
 * 1111 22
 * 1                    1
 * 11 2                 2
 * 111 21               3
 * 1111 22 211          4
 * 5 11111 2111 221     5
 * 51 111111 222 2211 21111
 */



 function solution(n, money) {
    var answer = 0;
    let arr=[]
    for(let i=1;i<=n;i++){
        for(let j=0;j<money.length;j++){
            if(i%money[j]==0){
                arr.push(i)
            }
        }
    }
    console.log(arr)
    arr=[...new Set(arr)]
    console.log(arr.length-1)
    return arr.length-1;
}

console.log(solution(5,[1,2,5]))