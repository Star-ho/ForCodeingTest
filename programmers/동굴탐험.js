function solution(n, path, order) {
    var answer = true;
    let map=new Map()
    let arr=Array.from({length:n},()=>-1)
    map.set(0,0)
    let i=0
    while(path.length>0){
        console.log(path,i)
        if(set(path[i])){
            path=[...path.slice(0,i),...path.slice(i+1)]
        }else{
            i++
        }
        if(i==path.length){
            i=0
        }
    }
    return true;
    function set(arr){
        if(arr[0]==0){
            map.set(arr[1],arr[0])
            return true
        }
        if(arr[1]==0){
            map.set(arr[0],arr[1])
            return true
        }
        if(map.get(arr[1])!=undefined){
            map.set(arr[0],arr[1])
            return true
        }
        if(map.get(arr[0])!=undefined){
            map.set(arr[1],arr[0])
            return true
        }
        return false
    }
}

console.log(solution(

	9, [[8, 1], [0, 1], [1, 2], [0, 7], [4, 7], [0, 3], [7, 5], [3, 6]], [[4, 1], [5, 2]]


))

