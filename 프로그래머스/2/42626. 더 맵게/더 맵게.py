import heapq

def solution(scoville, K):
    heapq.heapify(scoville)
    count = 0
    chk = False
    
    while scoville[0] < K:
        if len(scoville) == 1:
            return -1

        count += 1
        food1 = heapq.heappop(scoville)       
        food2 = heapq.heappop(scoville)
        new_food = food1 + food2 * 2
        heapq.heappush(scoville, new_food)

    return count