function solution(orders, course) {
    var answer = [];
    let cate=[...new Set( [ ... (orders.map(v=>v.split(''))).flat() ] )]
    let menu=[]
    for(let i=0;i<course.length;i++){
        menu.push(...combination(cate,course[i]))
    }
    menu=menu.map(v=>[v,0])
    for(let i=0;i<orders.length;i++){
        for(let j=0;j<menu.length;j++){
            let correctLen=0
            for(let k=0;k<menu[j][0].length;k++){
                if(orders[i].indexOf(menu[j][0][k])!=-1){
                    correctLen++
                }

            }
            if(menu[j][0].length==correctLen){
                menu[j][1]++
            }
        }
    }
    let arr=Array.from({length:Math.max(...course)+1},()=>[] )
    for(let i=0;i<menu.length;i++){
        if(menu[i][1]>1)
            arr[menu[i][0].length].push(menu[i])
    }
    arr=arr.map(v=>{
        v.sort((a,b)=>b[1]-a[1])
        return v.map(v=>{
            v[0].sort()
            return [v[0].join(''),v[1]]
        })
    })
    let max=Array.from({length:Math.max(...course)+1},()=>[0] )
    for(let i=0;i<arr.length;i++){
        let temp=arr[i].map(v=>v[1])
        if(temp){
            max[i]=Math.max(...temp)
        }
    }
    max=max.map(v=>v==-Infinity?0:v)
    for(let i=0;i<max.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(max[i]==arr[i][j][1]){
                answer.push(arr[i][j][0])
            }
        }
    }
    answer.sort()
    return answer;
}



function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
  }  


  
console.log(solution(


    ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]
))