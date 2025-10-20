import sys
import heapq
input = sys.stdin.readline

N, M = map(int, input().split())
adj = [[] for _ in range(N + 1)]
for _ in range(M):
    a, b, c = map(int, input().split())
    adj[a].append((c, b))
    adj[b].append((c, a))


chk = [False] * (N + 1)
heap = [(0, 1)]
cost = 0
mx_cost = 0

while heap:
    ew, en = heapq.heappop(heap)
    if chk[en] == False:
        chk[en] = True
        cost += ew
        mx_cost = max(mx_cost, ew)
        for next in adj[en]:
            if chk[next[1]] == False:
                heapq.heappush(heap, next)

print(cost - mx_cost)
