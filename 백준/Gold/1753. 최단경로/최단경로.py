import sys
import heapq

input = sys.stdin.readline
INF = sys.maxsize

V, E = map(int, input().split())
K = int(input())
edge = [[] for _ in range(V + 1)]
for i in range(E):
    u, v, w = map(int, input().split())
    edge[u].append((w, v))

heap = [(0, K)]
dist = [INF] * (V + 1)
dist[K] = 0

while heap:
    ew, ev = heapq.heappop(heap)
    if ew != dist[ev]:
        continue
    for nw, nv in edge[ev]:
        if dist[nv] > ew + nw:
            dist[nv] = ew + nw
            heapq.heappush(heap, (dist[nv], nv))

for d in dist[1:]:
    if d == INF:
        print("INF")
    else:
        print(d)
