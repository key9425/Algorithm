import sys
input = sys.stdin.readline

def find_parent(n):
    if parents[n] == n:
        return n

    parents[n] = find_parent(parents[n])
    return parents[n]


def union(p1, p2):
    if p1 < p2:
        parents[p2] = p1
    else:
        parents[p1] = p2


while True:
    m, n = map(int, input().split())
    if m == n == 0:
        break

    adj = []
    cost = 0
    for _ in range(n):
        x, y, z = map(int, input().split())
        cost += z
        adj.append((x, y, z))
    adj.sort(key=lambda x: x[2])

    parents = [i for i in range(m)]
    cnt = 0
    min_cost = 0

    for x, y, z in adj:
        p1 = find_parent(x)
        p2 = find_parent(y)
        if p1 != p2:
            union(p1, p2)
            cnt += 1
            min_cost += z
            if cnt == m - 1:
                break

    print(cost - min_cost)
