def test_pile(pile, block):
    if (len(pile) == 0):
        return True
    return pile[-1] > block


def dump_block(block, piles):
    for pile in piles:
        if (test_pile(pile, pile[-1])):
            pile.append(block)
            return True
    return False


def sort_arr(arr):
    if (len(arr) == 1):
        return [arr[-1]]
    return [arr[-1]] + sort_arr(arr[:len(arr) - 1])


def hanoi():
    pile1 = [1, 2]
    pile2 = []
    pile3 = []
    piles = [pile2, pile3]
    sort = sort_arr(pile1)

    while len(pile1) > 0:
        block = pile1.pop()
        if (dump_block(block, piles[1:])):
              
        


arr = [1, 2, 3, 4, 5]

# print(arr[1 : 3])
# print(arr[:2])
# print(arr[1:])
print(sort_arr(arr))
