let graph, visit, check, key, lock;

function solution(n, path, order) {
    graph = new Array(n).fill(0).map(() => []);
    visit = new Array(n).fill(false);
    key = new Array(n).fill(-1);
    lock = new Array(n).fill(-1);
    check = new Set();

    path.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    })
    order.forEach(([k,l]) => {
        key[k] = l;
        lock[l] = k;
    })

    circuitGraphFromBFS();
    //circuitGraph(0);

    for(let node of visit) if(!node) return false;
    return true;
}

function circuitGraphFromBFS() {
    const q = [];
    q.push(0);
    visit[0] = true;

    if(lock[0] !== -1) return;

    while(q.length !== 0){
        const cur = q.shift();
        lock[key[cur]] = -1;

        if(check.has(key[cur])) {
            check.delete(key[cur]);
            visit[key[cur]] = true;
            q.push(key[cur]);
        }

        for(let next of graph[cur]){
            if(visit[next]) continue;
            if(lock[next] !== -1) {
                check.add(next);
                continue;
            }
            visit[next] = true;
            q.push(next);
        }
    }
}