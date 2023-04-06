wheels = []
for i in range(4):
    wheels.append(list(map(int, input())))
k = int(input())

def rotation_right(number):
    wheels[number].insert(0, wheels[number].pop())

def rotation_left(number):
    wheels[number].append(wheels[number][0])
    del wheels[number][0]

def rotation(number, d):
    rotate = [[number, d]]
    nd = d

    #left
    for i in range(number, 0, -1):
        if wheels[i-1][2] != wheels[i][6]:
            nd *= -1
            rotate.append([i-1, nd])
        else: break
    
    nd = d
    # right
    for i in range(number, 3):
        if wheels[i+1][6] != wheels[i][2]:
            nd *= -1
            rotate.append([i+1, nd])
        else: break

    for r in rotate:
        if r[1] == 1: rotation_right(r[0])
        else: rotation_left(r[0])



for i in range(k):
    n, d = map(int, input().split())
    rotation(n-1, d)

score = 0
for i in range(4):
    if wheels[i][0]==1: score += 2 ** i

print(score)