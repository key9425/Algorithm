def DFS(x, y):
    global cnt
    arr[x][y] = 0
    cnt += 1

    for dx, dy in move:
        nx = x + dx
        ny = y + dy
        if 0 <= nx < N and 0 <= ny < N and arr[nx][ny]:
            DFS(nx, ny)


N = int(input())
arr = [list(map(int, input().strip())) for _ in range(N)]

house_cnt = []
move = [(1, 0), (-1, 0), (0, 1), (0, -1)]
for i in range(N):
    for j in range(N):
        if arr[i][j] == 1:
            cnt = 0
            DFS(i, j)
            house_cnt.append(cnt)

print(len(house_cnt))
for house in sorted(house_cnt):
    print(house)