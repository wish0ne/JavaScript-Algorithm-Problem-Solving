n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]


dx = [1, -1, 0, 0] # 아래, 위, 오른쪽, 왼쪽
dy = [0, 0, 1, -1]

answer = 0

def find(board):
    big = 0
    for i in range(n):
        for j in range(n):
            big = max(big, board[i][j])
    return big

def move(board, i, j, d, merge):
    nx = i
    ny = j
    while True:
        if nx+dx[d]<0 or nx+dx[d]>=n or ny+dy[d]<0 or ny+dy[d]>=n: break
        if board[nx+dx[d]][ny+dy[d]]!=0: break
        nx += dx[d]
        ny += dy[d]

    bx = nx + dx[d]
    by = ny + dy[d]
    if bx<0 or bx>=n or by<0 or by>=n:
        if nx==i and ny==j: return
        board[nx][ny] = board[i][j]
        board[i][j] = 0
        return
    
    if board[bx][by] == board[i][j] and not merge[bx][by]:
        merge[bx][by] = True
        board[bx][by] *= 2
        board[i][j] = 0
    elif nx==i and ny == j: return
    else:
        board[nx][ny] = board[i][j]
        board[i][j] = 0


def move_up(board, d):
    merge = []
    for i in range(n): merge.append([False]*n)
    for i in range(0, n):
        for j in range(0, n):
            if board[i][j]==0: continue
            move(board, i, j, d, merge)

def move_down(board, d):
    merge = []
    for i in range(n): merge.append([False]*n)
    for i in range(n-1, -1, -1):
        for j in range(0, n):
            if board[i][j]==0: continue
            move(board, i, j, d, merge)

def move_right(board, d):
    merge = []
    for i in range(n): merge.append([False]*n)
    for i in range(n-1, -1, -1):
        for j in range(n-1, -1, -1):
            if board[i][j]==0: continue
            move(board, i, j, d, merge)

def move_left(board, d):
    merge = []
    for i in range(n): merge.append([False]*n)
    for i in range(n-1, -1, -1):
        for j in range(0, n):
            if board[i][j]==0: continue
            move(board, i, j, d, merge)

def start(board, d):
    if (d==0): move_down(board, d)
    elif (d==1): move_up(board, d)
    elif (d==2): move_right(board, d)
    else: move_left(board, d)

def solve(i, board):
    global answer
    if i>=5:
        big = find(board)
        answer = max(answer, big)
        return
    for k in range(4):
        temp = []
        for j in range(n): temp.append(board[j][:])
        start(temp, k)
        solve(i+1, temp)


solve(0, board)
print(answer)
