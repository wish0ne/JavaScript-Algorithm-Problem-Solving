dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

n, m = map(int, input().split())
city = [list(map(int, input().split())) for _ in range(n)]

houses = []
markets = []

for i in range(n):
    for j in range(n):
        if city[i][j] == 1: houses.append([i, j])
        elif city[i][j] == 2: markets.append([i, j])

answer = 999999999

def calc(house, selected):
    [x, y] = house
    chicken = 999999999
    for select in selected:
        [a, b] = select
        chicken = min(abs(a-x) + abs(b-y), chicken)
    return chicken



def close(i, selected):
    global answer
    if len(selected) == m:
        chicken = 0
        for house in houses:
            chicken += calc(house, selected)
        answer = min(answer, chicken)
        return
    if i >= len(markets): return
    selected.append(markets[i])
    close(i+1, selected)
    selected.pop()
    close(i+1, selected)


close(0, [])
print(answer)