N = int(input())
people = [tuple(map(int, input().split())) for _ in range(N)]
result = [1] * N

for i in range(N-1):
    for j in range(i+1, N):
        if people[i][0] > people[j][0] and people[i][1] > people[j][1]:
            result[j] += 1
        elif people[i][0] < people[j][0] and people[i][1] < people[j][1]:
            result[i] += 1

print(*result)