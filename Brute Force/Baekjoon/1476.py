[E, S, M] = map(int, input().split())


e = 0
s = 0
m = 0
for i in range(1, 7981):
    e = e % 15 + 1
    s = s % 28 + 1
    m = m % 19 + 1
    if(e==E and s==S and m==M):
        print(i)
        break
