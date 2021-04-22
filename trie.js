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
        for(let curChar of word){
            if(curNode.child[curChar]){
                curNode=curNode.child[curChar]
            }else{
                return ''
            }
        }
        if(curNode.end==true)
            return curNode.value;
        return ''
    }
}

trie=new Trie()
trie.insert('aaaaaaa')
trie.insert('aaasss')
trie.insert('123')
trie.insert('123')
trie.insert('adda')
trie.insert('affa')
console.log(trie.root.child.a)
