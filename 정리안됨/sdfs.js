solution()
function solution(inputString) {
    const input = `5 5 3
    5 4
    5 2
    1 2
    3 4
    3 1
    `.split('\n');
    const conditions = input
      .shift()
      .split(" ")
      .map(a => +a)
    const numberOfNodes = conditions[0]
    const numberOfEdges = conditions[1]
    const startNode = conditions[2]
  
    const graph = setGraph()
  
    let nodes = new Array()
    let visited = new Array(numberOfNodes + 1).fill(false)
    // dfs : 재귀적으로
    dfs(startNode)
    console.log(nodes.join(" "))
  
    function dfs(startNode) {
      // console.log(startNode)
      nodes.push(startNode)
      visited[startNode] = true
      const new_nodes = graph.get(startNode)
      for (let i = 0; i < new_nodes.length; i++) {
        const node = new_nodes[i]
        if (!visited[node]) {
          dfs(node)
        }
      }
    }
    nodes = new Array()
    visited = new Array(numberOfNodes + 1).fill(false)
    // bfs : q 이용
    bfs(startNode)
    console.log(nodes.join(" "))
  
    // 너비우선
    function bfs(startNode) {
      const q = [startNode]
      visited[startNode] = true
      // console.log(q)
      while (q.length > 0) {
        const node = q.shift()
        nodes.push(node)
        const new_nodes = graph.get(node)
        for (let i = 0; i < new_nodes.length; i++) {
          const new_node = new_nodes[i]
          if (!visited[new_node]) {
            q.push(new_node)
            visited[new_node] = true
          }
        }
      }
    }
  
    function setGraph() {
      const map = new Map()
      for (let i = 0; i < numberOfEdges; i++) {
        const node = input[i].split(" ").map(a => +a)
        if (map.get(node[0])) {
          map.get(node[0]).push(node[1])
        } else {
          map.set(node[0], [node[1]])
        }
        if (map.get(node[1])) {
          map.get(node[1]).push(node[0])
        } else {
          map.set(node[1], [node[0]])
        }
      }
  
      // sort를 해줘야함
      map.forEach(value => {
        value.sort()
      })
      console.log(map)
      return map
    }
}