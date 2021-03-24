function solution(dirs) {
    var answer = 0;
    let loc=[0,0]
    let locstack=[]
    dirs=dirs.split('')
    dirs.forEach(v=>{
        let temp=[]
        if(v=='U'){
            if(loc[1]!=5){
                temp=loc.slice()
                loc[1]++;
                locstack.push([...loc,...temp]);
                locstack.push([...temp,...loc]);
            }
        }
        if(v=='D'){
            if(loc[1]!=-5){
                temp=loc.slice()
                loc[1]--;
                locstack.push([...loc,...temp]);
                locstack.push([...temp,...loc]);
            }
        }
        if(v=='L'){
            if(loc[0]!=-5){
                temp=loc.slice()
                loc[0]--;
                locstack.push([...loc,...temp]);
                locstack.push([...temp,...loc]);
            }
        }
        if(v=='R'){
            if(loc[0]!=5){
                temp=loc.slice()
                loc[0]++;
                locstack.push([...loc,...temp]);
                locstack.push([...temp,...loc]);
            }
        }

    })

    //console.log(locstack)
    locstack=removeDup(locstack)
//    console.log(locstack)
    answer=locstack.length
    return answer/2;
}



function removeDup(arr){
	return [...new Set(arr.join('|').split('|'))].map(v=>v.split(',')).map(v=>v.map(a=>+a))
}

    console.log(solution("ULURRDLLU"))