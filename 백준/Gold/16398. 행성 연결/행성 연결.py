import sys
import heapq
input = sys.stdin.readline

N = int(input())
adj = []
for i in range(N):
    adj.append([(int(v), j) for j, v in enumerate(input().split()) if i != j])

heap = [(0, 0)]
chk = [False] * N
cost = 0

while heap:
    ew, en = heapq.heappop(heap)
    if chk[en] == False:
        chk[en] = True
        cost += ew
        for next in adj[en]:
            if chk[next[1]] == False:
                heapq.heappush(heap, next)


print(cost)
