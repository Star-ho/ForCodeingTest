function solution(k, room_number) {
    let map=new Map();

    return room_number.map(v=>find(v))

    function find(x){
        let num=map.get(x)
        if(num){
            map.set(x,find(map.get(x)))
            return map.get(x)
        }else{
            map.set(x,x+1)
            return x
        }
    }
}

console.log(solution(

    10, [1, 3, 4, 1, 3, 1]


))