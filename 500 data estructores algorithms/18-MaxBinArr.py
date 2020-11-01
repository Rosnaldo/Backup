nums = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0]
    #  -1  0 -1 -2 -3 -4 -5 -4 -5 -6 -7 -6 -5 -4 -5


def MaxBinArr(nums):
    d = {}

    count = 0
    maxLen = 0

    for indx, ele in enumerate(nums):
        if ele == 0:
            count -= 1
        else:
            count += 1

        if count == 0:
            maxLen = indx + 1
        if count in d:
            print('count', count, 'indx', indx, indx - d[count])
            maxLen = max(maxLen, indx - d[count])
        else:
            d[count] = indx
        print(indx, 'count', count, d, 'maxLen', maxLen)

    print("\t\t maxLen:", maxLen, "\t\t d:", d)


MaxBinArr(nums)
