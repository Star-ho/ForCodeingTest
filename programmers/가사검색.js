class Node{
    constructor(value=''){
        this.value=value;
        this.end=false;
        this.child={}    
    }
}
class Trie{
    constructor(value){
        this.root=new Node();
    }
    insert(word, curNode=this.root){
        for(let char of word){
            if(curNode.child[char]===undefined){
                curNode.child[char]=new Node(curNode.value+char)
            }
            curNode=curNode.child[char]
        }
        curNode.end=true
    }
    search(word){
        let curNode=this.root
        let quetCount=word.length-word.indexOf('?')
        word=word.slice(0,word.indexOf('?'))
        for(let i=0;i<word.length;i++){
            if(curNode.child[word[i]]){
                curNode=curNode.child[word[i]]
            }
        }
        // console.log(Object.values(curNode.child))
        // console.log(Object.values(curNode.child)[0].end)
        // console.log(curNode)
        // console.log(curNode.child['d'])
        let count=0
        let dfs=function(curNode,quetCount){
            if(quetCount==0){
                let arr=Object.values(curNode)
                for(let i of arr){
                    if(i==true)
                        count++
                }
                return
            }
            let arr=Object.keys(curNode.child)
            for(let i of arr){
                dfs(curNode.child[i],quetCount-1)
            }
        }
        dfs(curNode,quetCount)
        return count
    }
}

function solution(words, queries) {
    var answer = [];
    let trie=new Trie()
    for(let i of words){
        trie.insert(i)
    }
    let reverseTrie=new Trie()
    words=words.map(v=>v.split('').reverse().join(''))
    for(let i of words){
        reverseTrie.insert(i)
    }

    for(let i of queries){
        if(i[0]=='?'){
            answer.push(reverseTrie.search(i.split('').reverse().join('')))
        }else{
            answer.push(trie.search(i))
        }
    }
    return answer;
}

console.log(solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"]
    
    ,["fro??", "?????", "fr???", "fro???", "pro?"]
    
    ))