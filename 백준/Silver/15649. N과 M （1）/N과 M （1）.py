def permutation(i):
    if i == M:
        print(*result)
    else:
        for j in range(1, N+1):
            if visited[j] == 0:
                visited[j] = 1
                result[i] = j
                permutation(i + 1)
                visited[j] = 0


N, M = map(int, input().split())
visited = [0] * (N+1)
result = [0] * M
permutation(0)