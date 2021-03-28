function solution(numbers) {
    var answer = 0;
    numbers=numbers.split('')
    let numperm=[];
    for(let i =1;i<=numbers.length;i++){
        numperm=[...numperm,...perm(numbers,i)]
    }
    numperm=numperm.map(v=>+v.join(''))
    numperm=[...new Set(numperm)]
    //console.log(numperm)
    numperm.forEach(v=>{
        if(v==1||v==0)
            return;
        for(let i=2;i<v;i++){
            if(v%i==0)
                return;
        }
        answer++
    })

    return answer;

}

//console.log(solution("011"),3)

function perm(arr, len) {
    const results = [];
    if (len === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = perm(rest, len - 1); // 나머지에 대해 순열을 구한다.
      const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
  
    return results; // 결과 담긴 results return
};
  
