N, K = map(int, input().split())
A = list(int(input()) for _ in range(N))

cnt = 0
for i in range(N - 1, -1, -1):
    if K >= A[i]:
        cnt += K // A[i]
        K %= A[i]
        if not K:
            break
print(cnt)