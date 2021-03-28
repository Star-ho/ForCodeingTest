var countVowelStrings = function(n) {
    let cache=new Map()
    cache.set(1,[1,1,1,1,1])
    cache.set(2,[5,4,3,2,1])
    cache.set(3,[ 15, 10, 6, 3, 1 ])
    cache.set(4,[ 35, 20, 10, 4, 1 ])
    function sum(n){
        if(cache.has(n))
            return cache.get(n)
        if(!cache.has(n-1))
            sum(n-1)
        let arr=cache.get(n-1)
        let arr2=Array.from({length:5},()=>0)
        arr2[0]=arr[0]+arr[1]+arr[2]+arr[3]+arr[4]
        arr2[1]=arr[1]+arr[2]+arr[3]+arr[4]
        arr2[2]=arr[2]+arr[3]+arr[4]
        arr2[3]=arr[3]+arr[4]
        arr2[4]=arr[4]
        cache.set(n,arr2)
    }
    sum(n)
    return cache.get(n).reduce((a,b)=>a+=b,0)
    };

console.log(countVowelStrings(33))