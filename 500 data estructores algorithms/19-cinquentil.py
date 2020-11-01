import math
#      0  1  2  3  4  5  6  7  8  9
arr = [1, 1, 2, 3, 4, 4, 4, 4, 4, 5]
# 10 5 2 1 


def range_line(start, end, arr):
    half = math.floor((end - start) / 2)
    middle = middle_point(start, end)
    right = end + half
    left = start - half
    print('half', half)
    print('middle', middle, arr[middle])
    print('right', right, arr[right])
    print('left', left, arr[left])
    if (arr[right] == arr[middle] and arr[left] == arr[middle]):
        return True
    if (half == 1):
        return False
    if (arr[right] == arr[middle]):
        return range_line(middle, right, arr)
    if (arr[left] == arr[middle]):
        return range_line(left, middle, arr)
    return False


def range_line_init(middle, dist, arr):
    half = math.floor(dist)
    right = middle + half
    left = middle - half
    print('half', half)
    print('middle', middle, arr[middle])
    print('right', right, arr[right])
    print('left', left, arr[left])
    if (arr[right] == arr[middle] and arr[left] == arr[middle]):
        return True
    if (arr[right] == arr[middle]):
        return range_line(middle, right, arr)
    if (arr[left] == arr[middle]):
        return range_line(left, middle, arr)
    return False


def middle_point(start, end):
    return math.floor((start + end) / 2)


def cinquentil(arr):
    start = math.floor(len(arr) / 2)
    end = len(arr) - 1
    middle = middle_point(start, end)
    dist = math.floor((end - start) / 2)

    return range_line_init(middle, dist, arr)


print(cinquentil(arr))
