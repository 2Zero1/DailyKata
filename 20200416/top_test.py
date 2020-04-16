#    - 1번째 부터 송신을 보내려고 하는 탑의 번호 전까지 배열을 자름
#    - 송신탑의 번호보다 높은 번호를 찾고 가장 마지막 값을 받아 결과에 넣는다.
#    - 없다면 0을 넣는다.
def solution(tops) :
    arr = list(enumerate(tops))
    result = []
    
    for top in arr :
        result.append(getReceivedTop(top[0], arr))
    return result

def getReceivedTop(num, tops) :
    result = list(filter(lambda top : top[1] > tops[num][1], tops[:num]))
    return 0 if len(result) == 0 else result[-1][0] + 1
    
    
    

def test_solution() :
    assert solution([6,9,5,7,4]) == [0,0,2,2,4]

def test_getReceivedTop() :
    assert getReceivedTop(3,[[0, 6], [1, 9], [2, 5], [3, 7], [4, 4]]) == 2