import sys
input = sys.stdin.readline

n = int(input())
m = int(input())

INF = sys.maxsize
data = [[INF for _ in range(n+1)] for _ in range(n+1)]
for i in range(1, n+1):
    data[i][i] = 0
for _ in range(m):
    a, b, c = map(int, input().split())
    data[a][b] = min(data[a][b], c)

for k in range(1, n+1):
    for j in range(1, n+1):
        for i in range(1, n+1):
            if data[i][j] > data[i][k] + data[k][j]:
                data[i][j] = data[i][k] + data[k][j]

for i in range(1, n+1):
    for j in range(1, n+1):
        print(0 if data[i][j]==INF else data[i][j], end=' ')
    print()