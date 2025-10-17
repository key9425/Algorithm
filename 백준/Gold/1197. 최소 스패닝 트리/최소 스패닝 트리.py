from heapq import heappop, heappush

V, E = map(int, input().split())
adj = [[] for _ in range(V + 1)]
for _ in range(E):
    A, B, C = map(int, input().split())
    adj[A].append((C, B))
    adj[B].append((C, A))

def MST(rs):
    visited = [False] * (V + 1)
    heap = [(0, 1)]
    while heap:
        weight, node = heappop(heap)
        if not visited[node]:
            visited[node] = True
            rs += weight
            for nxt in adj[node]:
                if not visited[nxt[1]]:
                    heappush(heap, nxt)
    return rs

rs = MST(0)
print(rs)