import sys
from collections import deque
input = sys.stdin.readline


n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for i in range(1, m + 1):
    a, b = map(int, input().split())
    graph[b].append(a)

max_val = 0
answer = []

def bfs(v):
    global answer
    global max_val
    global n
    visited = [False] * (n+1)
    queue = deque()
    queue.append(v)
    visited[v] = True
    count = 0
    while len(queue) > 0:
        x = queue.popleft()
        count += 1
        for i in graph[x]:
            if visited[i]: continue
            visited[i] = True
            queue.append(i)
    if count > max_val:
        max_val = count
        answer = [v]
    elif count == max_val:
        answer.append(v)
        

for i in range(1, n + 1):
    bfs(i)

print(" ".join(map(str, answer)))
