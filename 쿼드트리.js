function solution(arr) {
    var answer = [0,0];
    let quad=function(arr){
        let arrSum=arr.flat().reduce((a,b)=>a+=b)
        if(arrSum==arr.length*arr[0].length){
            answer[1]++;
            return;
        }else if(arrSum==0){
            answer[0]++;
            return;
        }
        if(arr[0].length==2){
     //       console.log(arr)
            arr.forEach(v=>v.forEach(a=>a==1?answer[1]++:answer[0]++))
            return;
        }
        let arr1=arr.slice(0,arr.length/2).map((v)=>v.filter((a,i)=>i<v.length/2))
        quad(arr1)
        let arr2=arr.slice(0,arr.length/2).map((v)=>v.filter((a,i)=>v.length/2<=i))
        quad(arr2)
        let arr3=arr.slice(arr.length/2,arr.length).map((v)=>v.filter((a,i)=>i<v.length/2))
        quad(arr3)
        let arr4=arr.slice(arr.length/2,arr.length).map((v)=>v.filter((a,i)=>v.length/2<=i))    
        quad(arr4)
    }       
    quad(arr)
    return answer;
}

console.log(solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]))

/*
퀴드트리 갯수세기

배열이 안의 모든 숫자가 같다? 그럼 0인지 1인지 확인해서 answer[0] 또는 answer[1]일 ++
다르다 그러면 4개로 잘라서 함수에 다시 넣기
 */