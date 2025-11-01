import sys, heapq
input = sys.stdin.readline
INF = sys.maxsize


def dist_arr(start, N, edge):
    dist = [INF] * (N + 1)
    dist[start] = 0
    heap = [(0, start)]

    while heap:
        ew, ev = heapq.heappop(heap)

        if ew != dist[ev]:
            continue

        for nw, nv in edge[ev]:
            if dist[nv] > ew + nw:
                dist[nv] = ew + nw
                heapq.heappush(heap, (dist[nv], nv))

    return dist


N, E = map(int, input().split())
edge = [[] for _ in range(N + 1)]
for _ in range(E):
    a, b, c = map(int, input().split())
    edge[a].append((c, b))
    edge[b].append((c, a))
v1, v2 = map(int, input().split())

dist_1 = dist_arr(1, N, edge)
dist_v1 = dist_arr(v1, N, edge)
dist_v2 = dist_arr(v2, N, edge)

path1 = dist_1[v1] + dist_v1[v2] + dist_v2[N]
path2 = dist_1[v2] + dist_v2[v1] + dist_v1[N]
result = min(path1, path2)

print(-1 if result >= INF else result)
