N = int(input())
pillar = sorted([tuple(map(int, input().split())) for _ in range(N)])
result = 0
idx1, idx2 = 0, N - 1

while True:
    L1, H1 = pillar[idx1]
    check = True
    for i in range(idx1 + 1, N):
        L2, H2 = pillar[i]
        if H1 < H2:
            result += (L2 - L1) * H1
            idx1 = i
            check = False
            break
    if check:
        break

while True:
    L1, H1 = pillar[idx2]
    check = True
    for i in range(idx2 - 1, idx1 - 1, -1):
        L2, H2 = pillar[i]
        if H1 < H2:
            result += (L1 - L2) * H1
            idx2 = i
            check = False
            break
    if check:
        break

result += (pillar[idx2][0] - pillar[idx1][0] + 1) * pillar[idx1][1]
print(result)