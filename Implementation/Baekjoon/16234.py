n, l, r = map(int, input().split())

world = [list(map(int, input().split())) for _ in range(n)]

count = 0
flag = True

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def find_parent(x, parent):
    if x!=parent[x]: parent[x] = find_parent(parent[x], parent)
    return parent[x]

def union(x, y, parent):
    x = find_parent(x, parent)
    y = find_parent(y, parent)
    if x>y: parent[x] = y
    else: parent[y] = x


def dfs(x, y, parent, visited):
    visited[x][y] = True
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx<0 or nx>=n or ny<0 or ny>=n: continue
        if visited[nx][ny]: continue
        diff = abs(world[nx][ny] - world[x][y])
        if diff>=l and diff<=r:
            union(x*n + y, nx*n + ny, parent)
            dfs(nx, ny, parent, visited)
            

while flag:
    parent = [0] * (n*n)
    for i in range(n*n): parent[i] = i

    visited = []
    for i in range(n): visited.append([False] * n)

    # 국경선 오픈
    for i in range(n):
        for j in range(n):
            dfs(i, j, parent, visited)

    # 연합 체크
    total_count = [0] * (n*n)
    total_sum = [0] * (n*n)
    for i in range(n):
        for j in range(n):
            idx = parent[i*n + j]
            total_sum[idx] += world[i][j]
            total_count[idx] += 1
    

    #인구이동
    flag = False
    for i in range(n):
        for j in range(n):
            idx = parent[i*n + j]
            people = total_sum[idx] // total_count[idx]
            if world[i][j]!=people: 
                flag = True
                world[i][j] = people

    if not flag: break
    count+=1

print(count)
    