function solution(s, n) {
    s=s.split(' ')
    for(let i=0;i<s.length;i++){
        s[i]=s[i].split('')
        for(let j=0;j<s[i].length;j++){
            let temp= +s[i][j].charCodeAt()+n
            if(temp>122){
                temp=temp-122+96
            }
            if(s[i][j].charCodeAt()<=90&&temp>90){
                temp=temp-90+64
            }
            s[i][j]=String.fromCharCode(temp)
        }
        s[i]=s[i].join('')
    }
    return s.join(' ')
}


console.log(solution(


    "ZB",1
    
))