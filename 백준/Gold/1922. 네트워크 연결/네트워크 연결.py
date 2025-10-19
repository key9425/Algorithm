N = int(input())
M = int(input())

data = []
for _ in range(M):
    a, b, c = list(map(int, input().split()))
    if a != b:
        data.append((a, b, c))
data.sort(key=lambda x: x[2])


def find_set(x):
    if parents[x] == x:
        return x

    parents[x] = find_set(parents[x])
    return parents[x]


def union(p1, p2):
    if p1 < p2:
        parents[p2] = p1
    else:
        parents[p1] = p2


parents = [i for i in range(N + 1)]
cnt = 0
result = 0
for a, b, c in data:
    p1 = find_set(a)
    p2 = find_set(b)
    if p1 != p2:
        union(p1, p2)
        cnt += 1
        result += c
        if cnt == N - 1:
            break

print(result)