n = int(input())
time = []
price = []

for i in range(n):
    t, p = map(int, input().split())
    time.append(t)
    price.append(p)
    
answer = 0
def solve(i, total):
    global answer
    if i>=n:
        answer = max(answer, total)
        return
    if i + time[i] <= n:
        solve(i + time[i], total + price[i])
    solve(i+1, total)
    
solve(0, 0)
print(answer)