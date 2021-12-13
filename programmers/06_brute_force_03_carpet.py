## 완전탐색 - 카펫 (구현)

import math

brown = 24
yellow = 24

def solution(brown, yellow) :
    limit = int(math.sqrt(yellow))
    for i in range(1, limit+1) :
        if yellow % i == 0 :
            y = i
            x = yellow // y
        t = 2*(x + y)
        check = 0
        n = 0
        while check < brown :
            n += 1
            check = (n * t) + (n * 4)
            if check == brown :
                return [x+(2*n), y+(2*n)]
    return 0

print(solution(brown, yellow))    
