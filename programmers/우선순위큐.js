function solution(operations) {
    var answer = [];
    let I=Array.from([]);
    let D=Array.from([]);
    operations.forEach(v=>{
        if(v[0]=='I'){
            I.push(+v.slice(1))
            I.sort((a,b)=>(a-b))
        }else{
            if(+v.slice(1)==1){
                I.pop()
            }else{
                I.shift()
            }
        }
    })
    answer=[I[I.length-1]==undefined?0:I[I.length-1],I[0]==undefined?0:I[0]]
    return answer;
}

console.log(solution(["I 16","D 1"]))

/*
배열 I 선언

배열 D

배열의 앞 글자 확인후 I면 자른 후 I에 넣고 배열 I정렬
배열의 앞 글자 확인후 D면
	-1면 shift
	1이면 pop

max=I.pop?undefind:0
min=I.shift?undefind:0
answer에 [max,min]
 */