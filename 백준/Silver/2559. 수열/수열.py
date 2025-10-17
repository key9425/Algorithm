N, K = map(int, input().split())
temperatures = list(map(int, input().split()))

mx = temp = sum(temperatures[:K])
for i in range(1, N-K+1):
    temp = temp - temperatures[i-1] + temperatures[i+K-1]
    if mx < temp:
        mx = temp

print(mx)