function solution(n, results) {
    let answer=0
    const adj = new Array(n).fill(null).map(_=>new Array(n).fill(Infinity));
    for(let i = 0; i < n; i++) adj[i][i] = 0;
    results.map(v => {
        adj[v[0] - 1][v[1] - 1] = 0;
    });
    for(let k = 0; k < n; k++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                adj[i][j] = Math.min(adj[i][j], adj[i][k] + adj[k][j]);
            }
        }   
    }
    console.log(adj)
       adj.forEach((raw, i) => {
        let degree = 0;
        raw.forEach(v => v === 0 ? degree++ : null);
        for(let j = 0; j < n; j++){
            if(i === j) continue;
            adj[j][i] === 0 ? degree++ : null;
        }
        if(degree === n) answer++;
    })
    return answer
    

}