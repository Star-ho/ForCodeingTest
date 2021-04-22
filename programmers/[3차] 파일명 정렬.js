function solution(files) {
    var answer = [];
    let compare=function(a,b){
        let reg=/[0-9]/g
        let a_start_index=a.indexOf(a.match(reg)[0])
        let b_start_index=b.indexOf(b.match(reg)[0])
        
        let head_result=a.slice(0,a_start_index).toLowerCase().localeCompare(b.slice(0,b_start_index).toLowerCase())
        if(head_result==0){
            let a_number=parseInt(a.slice(a_start_index))
            let b_number=parseInt(b.slice(b_start_index))
            if(a_number>b_number){
                return 1
            }else if(a_number<b_number){
                return -1
            }else{
                return 0
            }
        }
        if(head_result<0){
            return -1
        }else if(head_result>0){
                return 1
        }else{
            return 0
        }
    }
    files.sort(compare(a,b))
    return files;
}