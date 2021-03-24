board=[
  [ 'C', 'C', 'B', 'D', 'E' ],
  [ 'A', 'A', 'A', 'D', 'E' ],
  [ 'A', 'A', 'A', 'B', 'F' ],
  [ 'C', 'C', 'B', 'B', 'F' ]
]
function rotateLeft(arr){
	let n=arr[0].length
	let m=arr.length
	let result=Array.from({length:n},()=>Array.from({length:m},()=>0))
	result.forEach((_,i)=>{
	        _.forEach((v,j)=>{
	            result[i][j]=arr[j][m-i]
	        })
	})
    return result
}
console.log(rotateLeft(board))
