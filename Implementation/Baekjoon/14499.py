n, m, x, y, k = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
commands = list(map(int, input().split()))

dx = [0, 0, 0, -1, 1]
dy = [0, 1, -1, 0, 0]

dice = {
    'top':0,
    'bottom':0,
    'front':0,
    'back':0,
    'left':0,
    'right':0
}

answer = []

def roll(c):
    temp = dice['top']
    if c==1:
        dice['top'] = dice['left']
        dice['left'] = dice['bottom']
        dice['bottom'] = dice['right']
        dice['right'] = temp
    elif c==2:
        dice['top'] = dice['right']
        dice['right'] = dice['bottom']
        dice['bottom'] = dice['left']
        dice['left'] = temp
    elif c==3:
        dice['top'] = dice['front']
        dice['front'] = dice['bottom']
        dice['bottom'] = dice['back']
        dice['back'] = temp
    elif c==4:
        dice['top'] = dice['back']
        dice['back'] = dice['bottom']
        dice['bottom'] = dice['front']
        dice['front'] = temp


for c in commands:
    nx = x + dx[c]
    ny = y + dy[c]
    if nx<0 or nx>=n or ny<0 or ny>=m: continue
    roll(c)
    if board[nx][ny]==0:
        board[nx][ny] = dice['bottom']
    else:
        dice['bottom'] = board[nx][ny]
        board[nx][ny] = 0
    answer.append(dice['top'])
    x = nx
    y = ny

print('\n'.join(map(str, answer)))
