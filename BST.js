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
    delete(value){
        let is_search=false
        let current_node=this.root
        let parent_node=this.root
        while(current_node){
            if(current_node.value==value){
                is_search=true;
                break;
            }
            if(value<current_node.value){
                parent_node=current_node;
                current_node=current_node.left
            }else{
                parent_node=current_node;
                current_node=current_node.right
            }
        }
        console.log(parent_node.value)
        console.log(current_node.value)
        if(current_node.left&&current_node.right){
            let change_node=current_node;
            if(parent_node.value<current_node.value){
                parent_node.right=current_node.right
            }
        }
        if(current_node.left){
            
        }
        if(current_node.left){
            
        }
        

    }
    _pre_order(node){
        if(node){
            console.log(node.value) 
            this._pre_order(node.left)
            this._pre_order(node.right)
        }
    }
    pre_order(){
        this._pre_order(this.root)   
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

    _in_order(node){
        if(node){
            this._in_order(node.left)
            console.log(node.value) 
            this._in_order(node.right)
        }
    }
    in_order(){
        this._in_order(this.root)   
    }

    _level_order(node){
        let queue=[node]
        while(queue.length>0){
            let cur_node=queue.shift()
            console.log(cur_node.value)
            if(cur_node){
                if(cur_node.left){
                    queue.push(cur_node.left)
                }
                if(cur_node.right){
                    queue.push(cur_node.right)
                }
            }
        }
    }

    level_order(){
       this._level_order(this.root)
    }

}

let arr=[40, 4, 34, 45, 14, 55, 48, 13, 15, 49, 47]

let bst=new BST(arr[0])
for(let i=1;i<arr.length;i++){
    bst.insert(arr[i])
}
bst.delete(45)
console.log(bst.level_order())
