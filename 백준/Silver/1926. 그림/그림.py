from collections import deque


def BFS(x, y):
    queue = deque()
    queue.append((x, y))
    paper[x][y] = 0
    size = 1
    while queue:
        x, y = queue.popleft()
        for dx, dy in move:
            nx = x + dx
            ny = y + dy
            if 0 <= nx < N and 0 <= ny < M and paper[nx][ny] == 1:
                queue.append((nx, ny))
                paper[nx][ny] = 0
                size += 1
    return size


N, M = map(int, input().split())
paper = [list(map(int, input().split())) for _ in range(N)]

move = [(1, 0), (-1, 0), (0, 1), (0, -1)]
cnt = 0
mx_size = 0
for i in range(N):
    for j in range(M):
        if paper[i][j] == 1:
            cnt += 1
            size = BFS(i, j)
            if mx_size < size:
                mx_size = size

print(cnt)
print(mx_size)