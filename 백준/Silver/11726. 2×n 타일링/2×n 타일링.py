N = int(input())
nums = [0] * (N + 1)

for i in range(1, N + 1):
    if i < 3:
        nums[i] = i
    else:
        nums[i] = nums[i - 1] + nums[i - 2]

print(nums[N] % 10007)
