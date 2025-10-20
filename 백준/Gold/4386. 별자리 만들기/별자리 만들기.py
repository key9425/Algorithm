import sys
import heapq
input = sys.stdin.readline

n = int(input())
stars = []
for _ in range(n):
    star = list(map(float, input().split()))
    stars.append((star))

adj = [[] for _ in range(n)]
for i in range(n - 1):
    for j in range(i + 1, n):
        d = ((stars[i][0] - stars[j][0]) ** 2 + (stars[i][1] - stars[j][1]) ** 2) ** 0.5
        adj[i].append((d, j))
        adj[j].append((d, i))

heap = [(0, 0)]
chk = [False] * n
cost = 0

while heap:
    ew, es = heapq.heappop(heap)
    if chk[es] == False:
        chk[es] = True
        cost += ew
        for next in adj[es]:
            if chk[next[1]] == False:
                heapq.heappush(heap, next)

print(cost)
