function solution(m, musicinfos) {
    var answer = '';
    m=sliceMusic(m)
    musicinfos=musicinfos.map(v=>{
        v=v.split(',')
        v[3]=sliceMusic(v[3])
        return v
    })
    console.log(musicinfos)
    return answer;
    function sliceMusic(str){
        str=str.split('')
        for(let i=0;i<str.length;i++){
            if(str[i]=='#'){
                str[i-1]+=str.splice(i,1)
                i--
            }
        }
        return str
    }
}

console.log(solution(

    "CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]
))