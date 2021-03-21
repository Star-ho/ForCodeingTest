function solution(numbers) {
    var answer = 0;
    let arr=numbers.split('')
    let arr2=Array.from([])
    for(let i =1;i<=numbers.length;i++){
        arr2.push(perm(arr,i).map(v=>v.map(v=>v).join('')))
    }
    console.log(arr2)
    arr2=arr2.flat().map(v=>+v)
    arr2=Array.from([...new Set(arr2)])
        
    arr=arr2.filter(v=>{
        for(let i=2;i<v/2;i++){
            if(v%i==0)
            return false;
        }
        return true
    })
    arr=arr.filter(v=>v!=0&&v!=1)

    return answer;
}


solution("17",2)

arr=[1,2,3]
