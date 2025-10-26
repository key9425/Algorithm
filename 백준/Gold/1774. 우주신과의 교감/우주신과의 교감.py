import sys
import math
input = sys.stdin.readline

def find_parent(v):
    if parents[v] < 0:
        return v
    parents[v] = find_parent(parents[v])
    return parents[v]

def union(v1, v2):
    p1 = find_parent(v1)
    p2 = find_parent(v2)

    if p1 == p2:
        return False

    if parents[p1] < parents[p2]:
        parents[p1] += parents[p2]
        parents[p2] = p1
    else:
        parents[p2] += parents[p1]
        parents[p1] = p2

    return True


N, M = map(int, input().split())

L = [(0, 0)] * (N + 1)
for i in range(1, N + 1):
    x, y = map(int, input().split())
    L[i] = (x, y)

parents = [-1] * (N + 1)
for _ in range(M):
    v1, v2 = map(int, input().split())
    union(v1, v2)

adj = []
for i in range(1, N):
    for j in range(i + 1, N + 1):
        d = math.sqrt((L[i][0] - L[j][0]) ** 2 + (L[i][1] - L[j][1]) ** 2)
        adj.append((d, i, j))

adj.sort()
cost = 0
for d, i, j in adj:
    if union(i, j):
        cost += d

print(f"{cost:.2f}")
