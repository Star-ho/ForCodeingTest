
function solution(nodeinfo) {
    let arr1=[]
    let arr2=[]
    class Node{
        constructor(value){
            this.left=null
            this.right=null
            this.x=value[0]
            this.y=value[1]
            this.value=value[2]
        }
    }
    class BST{
        constructor(root){
            this.root=root
        }
        insert(value){
            let curNode=this.root
            while(true){
                if(curNode.x>value[0]){
                    if(curNode.left){
                        curNode=curNode.left
                    }else{
                        curNode.left=new Node(value)
                        break;
                    }
                }else{
                    if(curNode.right){
                        curNode=curNode.right
                    }else{
                        curNode.right=new Node(value)
                        break;
                    }
                }
            }
        }
        preOrder(node=this.root){
            this._preOrder(node)
        }
        _preOrder(node){
            if(node){
                arr1.push(node.value)
                this.preOrder(node.left)
                this.preOrder(node.right)
            }
        }
    
        postOrder(node=this.root,arr=[]){
            this._postOrder(node)
        }
    
        _postOrder(node){
            if(node){
                this._postOrder(node.left)
                this._postOrder(node.right)
                arr2.push(node.value)
            }
        }
    }
    var answer = [[]];
    nodeinfo=nodeinfo.map((v,i)=>[...v,i+1])
    nodeinfo.sort((a,b)=>a[1]-b[1])
    let bst=new BST(new Node(nodeinfo.pop()))
    while(nodeinfo.length>0){
        bst.insert(nodeinfo.pop())
    }
    console.log(bst)
    bst.preOrder()
    bst.postOrder()
    return [arr1,arr2];
}


console.log(solution(


    [[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]

))

