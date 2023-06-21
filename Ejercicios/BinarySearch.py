list = [12,16,25,80,81,85]

def binarySearch(list,k):
    i = 0
    j= len(list)
    
    while i<j:
        m = int((i+j)/2)
        if k < list[m]:
            j=m
        elif k > list[m]:
            i=m
        elif k == list[m]:
            return m
        

print(binarySearch(list,81))

