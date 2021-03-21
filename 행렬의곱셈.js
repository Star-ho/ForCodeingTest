function solution(arr1, arr2) {
    let [a,b]=[0,0]
    var answer = Array.from({length:arr1.length},()=>Array.from({length:arr2[0].length},()=>0));
    console.log(answer,a,b)
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2[0].length;j++){
            let temp=0;
            for(let k=0;k<arr1[0].length;k++){
                temp+=arr1[a][k]*arr2[k][b]
            }
            answer[i][j]=temp
            b++;
        }
        b=0
        a++;
    }
    return answer;
}

console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],[[5, 4], [2, 4], [3, 1]]))