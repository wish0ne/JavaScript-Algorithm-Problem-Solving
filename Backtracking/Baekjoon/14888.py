n = int(input())
numbers = list(map(int, input().split(' ')))
plus, minus, multiple, divide = map(int, input().split(' '))

max_answer = -1000000001
min_answer = 1000000001

def solve(i, answer):
    global plus
    global minus
    global multiple
    global divide
    global max_answer
    global min_answer
    if(i==n):
        max_answer = max(answer, max_answer)
        min_answer = min(answer, min_answer)
        return
    if(plus>0):
        plus-=1
        solve(i+1, answer + numbers[i])
        plus+=1
    if(minus>0):
        minus-=1
        solve(i+1, answer - numbers[i])
        minus+=1
    if(multiple>0):
        multiple-=1
        solve(i+1, answer * numbers[i])
        multiple+=1
    if(divide>0):
        divide-=1
        if(answer<0): solve(i+1, -(-1*answer//numbers[i]))
        else: solve(i+1, answer//numbers[i])
        divide+=1
    
    
solve(1, numbers[0])
print(max_answer)
print(min_answer)
