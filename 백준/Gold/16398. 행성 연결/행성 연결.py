import sys
import heapq

input = sys.stdin.readline
INF = sys.maxsize

N = int(input())
adj = []
for _ in range(N):
    adj.append(list(map(int, input().split())))

heap = [(0, 0)]
chk = [False] * N
min_cost = [INF] * N
cost = 0
node_count = 0

while heap and node_count < N:
    ew, en = heapq.heappop(heap)

    if chk[en]:
        continue

    chk[en] = True
    cost += ew
    node_count += 1

    for v in range(N):
        nw = adj[en][v]
        if chk[v] == False and nw < min_cost[v]:
            min_cost[v] = nw
            heapq.heappush(heap, (nw, v))


print(cost)
