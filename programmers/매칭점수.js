function solution(word, pages) {
    var answer = 0;
    word='(?<![a-zA-Z])'+word+'(?![a-zA-Z])'
    word=RegExp(word,"igs")
    let arr=Array.from({length:pages.length},()=>[])
    let headReg=RegExp('<head>.*<meta.*content=\\".*\\".*<\/head>',"gis")
    let urlReg=RegExp('<meta.*content=\\"https://.*\\"[^>]*>',"gi")
    let searchReg=RegExp('<a href[^>]*>',"gi")
    for(let i=0;i<pages.length;i++){
        arr[i].push(i)
        if(pages[i].match(word)){
            arr[i].push(pages[i].match(word).length)
        }else{
            arr[i].push(0)
        }
        let temp=pages[i].match(headReg)[0]
        temp=temp.match(urlReg)
        temp=temp[0].slice(temp[0].indexOf('https://'),-3)
        arr[i].push(temp)
        if(pages[i].match(searchReg)){
            arr[i].push(pages[i].match(searchReg).map(v=>v.slice(v.indexOf('https://'),-2)))
        }else{
            arr[i].push([])
        }
    }
    arr.forEach(v=>v.push(v[1]))
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!=j){
                if(arr[j][3].indexOf(arr[i][2])!=-1){
                    arr[i][4]+=arr[j][1]/arr[j][3].length
                }
            }
        }
    }
    let max=Math.max(...arr.map(v=>v[4]))
    return arr.filter(v=>v[4]==max)[0][0]
}

console.log(solution(

	"Muzi", ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://careers.kakao.com/interview/list\"/>\n</head>  \n<body>\n<a href=\"https://programmers.co.kr/learn/courses/4673\"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://www.kakaocorp.com\"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href=\"https://hashcode.co.kr/tos\"></a>\n\n\t^\n</body>\n</html>"]
))