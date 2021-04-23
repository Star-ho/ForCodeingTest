//delete는 구현하지 않는걸로~
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(root){
        this.root=new Node(root);
    }
    insert(value){
        let cur_node=this.root;
        while(true){
            if(value<cur_node.value){
                if(cur_node.left){
                    cur_node=cur_node.left;
                }else{
                    cur_node.left=new Node(value)
                    break
                }
            }else{
                if(cur_node.right){
                    cur_node=cur_node.right
                }else{
                    cur_node.right=new Node(value)
                    break;
                }
            }
        }
    }
    search(value){
        let cur_node=this.root
        while(cur_node&&cur_node.value!=value){
            if(cur_node.value>value){
                cur_node=cur_node.left
            }else{
                cur_node=cur_node.right
            }
        }
        if(cur_node){
            return true
        }else{
            return false
        }
    }
    
    _post1_order(node){
        if(node){
          let left=this._post1_order(node.left)
          let right=this._post1_order(node.right)
          left=left?left:0
          right=right?right:0
          node.value+=left+right
          console.log(11,node.value)
          return node.value 
        }
    }
    post1_order(){
        this._post1_order(this.root)   
    }

    _post_order(node){
        if(node){
          this._post_order(node.left)
          this._post_order(node.right)
          console.log(node.value)
        }
    }
    post_order(){
        this._post_order(this.root)   
    }

}

let arr=[40, 4, 34, 45, 14, 55, 48, 13, 15, 49, 47]

let bst=new BST(arr[0])
for(let i=1;i<arr.length;i++){
    bst.insert(arr[i])
}
bst.post1_order()

//bst.post_order()
