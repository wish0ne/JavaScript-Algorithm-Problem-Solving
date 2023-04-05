n, m = map(int, input().split())
r, c, d = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

count = 0

def around(x, y):
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if board[nx][ny] == 0:
            return True
    return False
    

while True:
    if board[r][c] == 0:
        board[r][c] = 2
        count += 1
    if not around(r, c):
        nx = r - dx[d]
        ny = c - dy[d]
        if board[nx][ny]!=1:
            r = nx
            c = ny
            continue
        print(count)
        break
    else:
        d -= 1
        if d<0: d = 3
        nx = r + dx[d]
        ny = c + dy[d]
        if board[nx][ny]==0:
            r = nx
            c = ny
            continue
        

    