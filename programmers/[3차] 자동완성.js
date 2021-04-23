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
        let count=0
        for(let i=0;i<word.length;i++){
            if(curNode.child[word[i]]){
                curNode=curNode.child[word[i]]
            }else{
                return ''
            }
            if((Object.keys(curNode.child).length>1&&i!=word.length-1)||(curNode.end==true&&i!=word.length-1)){
                count=i+2
            }
        }
        if(Object.keys(curNode.child).length>0){
            count=word.length
        }
        if(count==0){
            count=1
        }

        if(curNode.end==true)
            return count
        return ''
    }
}

function solution(words) {
    var answer = 0;
    let trie=new Trie()
    for(let i=0;i<words.length;i++){
        trie.insert(words[i])
    }
    for(let i=0;i<words.length;i++){
        answer+=trie.search(words[i])
    }
    return answer;
}

console.log(solution(
    ["go","gone","guild"]	
    
    ))