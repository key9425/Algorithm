import sys, heapq
INF = sys.maxsize

def solution(n, edge):
    adj = [[] for _ in range(n+1)]
    dist = [INF] * (n+1)
    for i, j in edge:
        adj[i].append((1, j))
        adj[j].append((1, i))
        
    dist[1]=0
    heap = [(0,1)]

    while heap:
        ew, ev = heapq.heappop(heap)
        if dist[ev] != ew: continue
        
        for nw, nv in adj[ev]:
            if dist[nv] > dist[ev] + nw:
                dist[nv] = dist[ev] + nw
                heapq.heappush(heap,  (dist[nv], nv))
    
    mx = 0
    count = 0
    for d in dist:
        if d == INF or mx > d:
            continue
        
        if mx < d:
            mx = d
            count = 1
        else:
            count += 1
    
    
    return count
