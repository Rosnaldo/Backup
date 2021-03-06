import math
#      0  1  2  3  4  5  6  7  8  9
arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 7, 8, 8, 8, 8, 8, 8]
# 10 5 2 1 


def range_line(start, end, arr):
    half = math.floor((end - start) / 2)
    middle = middle_point(start, end)
    right = end + half
    left = start - half
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
    half = math.floor(dist / 2)
    right = middle + half
    left = middle - half
    if (arr[right] == arr[middle] and arr[left] == arr[middle]):
        return True
    if (arr[right] == arr[middle]):
        return range_line(middle, right, arr)
    if (arr[left] == arr[middle]):
        return range_line(left, middle, arr)
    return False


def middle_point(start, end):
    return math.floor((start + end) / 2)


def quartil(arr):
    percent_20 = math.floor(len(arr) / 5)
    percent_25 = math.floor(len(arr) / 4)
    for i in range(4):
        i += 1
        middle = i * percent_20
        if (range_line_init(middle, percent_25, arr)):
            return arr[middle]


print(quartil(arr))
