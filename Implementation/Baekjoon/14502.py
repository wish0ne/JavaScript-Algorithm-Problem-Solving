n, m = map(int, input().split())
lab = [list(map(int, input().split())) for _ in range(n)]

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

virus = []
empty = []
for i in range(n):
    for j in range(m):
        if lab[i][j] == 2: virus.append([i, j])
        elif lab[i][j] == 0: empty.append([i, j])

def dfs(x, y, visited, temp):
    visited[x][y] = True
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx<0 or nx>=n or ny<0 or ny>=m: continue
        if visited[nx][ny]: continue
        if temp[nx][ny]==1: continue
        temp[nx][ny] = 2
        dfs(nx, ny, visited, temp)

def count(temp):
    safe = 0
    for i in range(n):
        for j in range(m):
            if temp[i][j] == 0: safe+=1
    return safe

def propagation():
    visited = []
    temp = []
    for i in range(n):
        visited.append([False]*m)
        temp.append(lab[i][:])
    for v in virus:
        x = v[0]
        y = v[1]
        dfs(x, y, visited, temp)
    safe = count(temp)
    return safe

answer = 0
for i in range(len(empty)):
    lab[empty[i][0]][empty[i][1]] = 1
    for j in range(i+1, len(empty)):
        lab[empty[j][0]][empty[j][1]] = 1
        for k in range(j+1, len(empty)):
            lab[empty[k][0]][empty[k][1]] = 1
            safe = propagation()
            answer = max(answer, safe)
            lab[empty[k][0]][empty[k][1]] = 0
        lab[empty[j][0]][empty[j][1]] = 0
    lab[empty[i][0]][empty[i][1]] = 0


print(answer)