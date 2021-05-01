function solution(numbers, hand) {
    var answer =[];
    let left=[3,0]
    let right=[3,2]
    let arr=[[1,2,3],[4,5,6],[7,8,9],['*',0,'#']]
    for(let num of numbers){
        arr.forEach((_,i)=>{
            _.forEach((v,j)=>{
                if(v==num){
                    if([1,4,7].indexOf(v)!=-1){
                        console.log('L',v,i,j)
                        answer.push('L')
                        left=[i,j]
                        return;
                    }
                    if([3,6,9].indexOf(v)!=-1){
                        console.log('R',v,i,j)
                        answer.push('R')
                        right=[i,j]
                        return;
                    }
                    let leftVal=Math.abs(left[0]-i)+Math.abs(left[1]-j)
                    let rightVal=Math.abs(right[0]-i)+Math.abs(right[1]-j)
                    console.log(leftVal,rightVal)
                    if(leftVal<rightVal){
                        console.log('L',v,i,j)

                        answer.push('L')
                        left=[i,j]
                    }
                    if(leftVal>rightVal){
                        console.log('R',v,i,j)

                        answer.push('R')
                        right=[i,j]
                    }
                    if(leftVal==rightVal){
                        if(hand=='right'){
                            console.log('R',v,i,j)

                            answer.push('R')
                            right=[i,j]
                        }else{
                            console.log('L',v,i,j)

                            answer.push('L')
                            left=[i,j]
                        }
                    }
                }

            })
        })
    }
    return answer;
}

console.log(solution(


	[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"


))