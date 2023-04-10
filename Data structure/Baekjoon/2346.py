n = int(input())
balls = list(map(int, input().split()))
answer = []


class Node:
    def __init__(self, value, index):
        self.prev = None
        self.next = None
        self.value = value
        self.index = index


list = []
for idx, ball in enumerate(balls):
    if idx == 0:
        head = Node(ball, 1)
        list.append(head)
    elif idx == n - 1:
        tail = Node(ball, n)
        tail.prev = list[-1]
        list[-1].next = tail
        tail.next = list[0]
        list[0].prev = tail
    else:
        node = Node(ball, idx + 1)
        node.prev = list[-1]
        list[-1].next = node
        list.append(node)


node = list[0]
while len(answer) < n:
    next = node
    answer.append(node.index)
    # 시계
    if node.value > 0:
        next = node.next
        # 노드 삭제
        node.prev.next = node.next
        node.next.prev = node.prev
        for i in range(node.value - 1):
            next = next.next

    # 반시계
    else:
        next = node.prev
        # 노드 삭제
        node.prev.next = node.next
        node.next.prev = node.prev
        for i in range(node.value, -1, 1):
            next = next.prev

    node = next

print(' '.join(map(str, answer)))

#solve