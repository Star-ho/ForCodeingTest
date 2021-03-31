arr=[[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
let result=0;
function trig(arr,index=0,loc=0,sum=0){
    if(loc==arr.length){
        result=Math.max(result,sum)
        return ;
    }
    console.log(arr[loc][index])
    trig(arr,index,loc+1,sum+arr[loc][index])
    trig(arr,index+1,loc+1,sum+arr[loc][index])

}
trig(arr)
console.group(result)

/*
선택할 수 있는 숫자는 이전인덱스, 이전인덱스+1

배열과, 이전의 인덱스, 합, 지금위치


지금 위치가 triangle==arr.length
Math.max(result,sum)

함수는
배열을 받아
이전인덱스가 없으면 걍 첫번째
sum+
있으면 이전인덱스넣고 함수한번실행, 이전인덱스+1넣고 함수 한번실행 */
