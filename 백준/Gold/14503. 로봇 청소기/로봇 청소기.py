def clean(x, y, d):
    cnt = 1
    room[x][y] = 2
    i = 0
    while 0 <= x < N and 0 <= y < M and room[x][y] != 1:
        # 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는 경우 확인
        i += 1
        d = (d - 1) % 4  # 반시계 방향으로 90도 회전
        nx, ny = x + dx[d], y + dy[d]  # 바라보는 방향을 기준으로 앞쪽 칸
        if 0 <= nx < N and 0 <= ny < M and not room[nx][ny]:  # 청소되지 않은 빈 칸의 경우
            cnt += 1
            room[nx][ny] = 2
            i = 0
            x, y = nx, ny
            continue

        # 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우
        # 바라보는 방향을 유지한 채로 한 칸 후진
        if i == 4:
            x -= dx[d]
            y -= dy[d]
            i = 0
    return cnt


N, M = map(int, input().split())
x, y, d = map(int, input().split())
room = [list(map(int, input().split())) for _ in range(N)]

# 북동남서
dx = (-1, 0, 1, 0)
dy = (0, 1, 0, -1)

result = clean(x, y, d)
print(result)