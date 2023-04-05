n = int(input())
s = [list(map(int, input().split())) for _ in range(n)]

start = []
link = []
answer = 999999999

def solve(i):
    global answer
    if(i>n): return
    if(len(start)==n/2 and len(link)==n/2):
        diff = calc(start, link)
        answer = min(answer, diff)
        return
    start.append(i)
    solve(i+1)
    link.append(start.pop())
    solve(i+1)
    link.pop()
    
def calc(start, link):
    start_sum = 0
    link_sum = 0
    for i in range(n//2):
        for j in range(i+1, n//2):
            start_sum += s[start[i]][start[j]] + s[start[j]][start[i]]
            link_sum += s[link[i]][link[j]] + s[link[j]][link[i]]
    return abs(start_sum - link_sum)
    
solve(0)
print(answer)