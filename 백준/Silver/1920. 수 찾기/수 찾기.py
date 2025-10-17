def search(st, en, num):
    if st > en:
        print(0)
        return

    mid = (st + en) // 2
    if A[mid] == num:
        print(1)
    elif A[mid] < num:
        search(mid + 1, en, num)
    else:
        search(st, mid - 1, num)


N = int(input())
A = sorted(list(map(int, input().split())))
M = int(input())
nums = list(map(int, input().split()))

for num in nums:
    search(0, N - 1, num)