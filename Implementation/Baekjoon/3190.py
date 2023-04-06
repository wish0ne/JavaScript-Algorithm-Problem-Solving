import sys
n = int(input())
k = int(input())

board = []
for i in range(n): board.append([0] * n)

#위, 오른쪽, 아래, 왼쪽
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

for i in range(k):
    x, y = map(int, input().split())
    board[x-1][y-1] = 2

l = int(input())
rotation = []
for i in range(l):
    a, b = input().split()
    rotation.append([int(a), b])

snake = [[0,0]]
board[0][0] = 1

time = 1
d = 1

while True:
    nx = snake[0][0] + dx[d]
    ny = snake[0][1] + dy[d]
    if nx<0 or nx>=n or ny<0 or ny>=n:
        print(time)
        sys.exit(0)
    if board[nx][ny] == 1:
        print(time)
        sys.exit(0)

    snake.insert(0, [nx, ny])
    if board[nx][ny]==0:
        x, y = snake.pop()
        board[x][y] = 0

    board[nx][ny] = 1

    # rotation
    if len(rotation)>0 and rotation[0][0] == time:
        x, y = rotation.pop(0)
        if y == 'L':
            d -= 1
            if d<0: d = 3
        else:
            d += 1
            if d>3: d=0

    time+=1

# 파이썬은 재귀제한이 빡센듯? 재귀로 하면 런타임에러 나서 반복문으로 고침