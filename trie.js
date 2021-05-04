class Node{
    constructor(value=''){
        this.value=value;
        this.end=false;
        this.child={}    
    }
}
class Trie{
    constructor(){
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
            if(Object.keys(curNode.child).length>1&&i!=word.length-1){
                count=i+2
            }
        }
        if(Object.keys(curNode.child).length>0||count==0){
            count=word.length
        }

        if(curNode.end==true)
            return count
        return ''
    }
}


trie=new Trie()
trie.insert('asdfg')
trie.insert('aaasss')
trie.insert('1234')
trie.insert('123')
trie.insert('aaa')
trie.insert('affa')
//console.log(trie.root.child['a'].child['a'].child['a'])
console.log(trie.search('affa'))


