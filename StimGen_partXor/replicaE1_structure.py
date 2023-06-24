import numpy as np 
from PIL import Image, ImageDraw




# # # # # # # # # # # # # # # # 
# 
#  Square Creator Function
# 
# # # # # # # # # # # # # # # # 

def generate_square(dim1, dim2, filename):
    lab_monitor = 1440/41 #<-- pixel info about lab monitor ensuring correct sizes
    res_w = lab_monitor

    # get correct dims
    dim2 = ( (dim2) * (230 - 25) ) + 25
    dim1 = ( (dim1) * (7.1 - 2.5) ) + 2.5


    d = dim1 * res_w
    s = int(np.round(dim2))

    # size of image
    v=250
    canvas = (v,v)

    # something for saving it (idk i didn't write these next parts)
    thumb = canvas[0], canvas[1]

    # init canvas
    im = Image.new('RGBA', canvas, (255, 255, 255, 255))
    draw = ImageDraw.Draw(im)

    # draw rectangles
    x1 = canvas[0]/2 - d/2
    y1 = canvas[0]/2 + d/2
    x2 = canvas[0]/2 + d/2
    y2 = canvas[0]/2 - d/2

    draw.rectangle([x1, y1, x2, y2],
        outline = (0, 0, 0, 255), 
        fill = (s,s,s,255),
    )

    # make thumbnail
    im.thumbnail(thumb)

    # save image
    im.save(filename)







# # # # # # # # # # # # # # # # 
# 
#  Create Images from Data
# 
# # # # # # # # # # # # # # # # 

dataA = np.array([
    [0,0], # A1
    [.2,.2], # A2
    [.8,.8], # A3
    [1,1], # A4


    





]) 


dataB = np.array([
   

    [0, 1], # B lower1
    [.2, .80], #B lower2



]) 


dataX = np.array([
   

    [0.6,0.4], #test
    [0.6,0.2], #test
    [0.6,0], #test

    [0.8,0.4], #test
    [0.8,0.2], #test
    [0.8,0], #test

    [1,0.4], #test
    [1,0.2], #test
    [1,0], #test

    



]) 


#for index, i in enumerate(data):
 #   generate_square(i[0], i[1], 'images/' + str(index) + '.png')

#get x and y values for all exemplars into lists
Ax = []
Ay = []

Bx = []
By = []

Xx = []
Xy = []

for indexA, iA in enumerate(dataA):
    #print(dataA[indexA,0])
    #print(dataA[indexA,1])
    Ax.append(dataA[indexA,0])

for indexA, iA in enumerate(dataA):
    Ay.append(dataA[indexA,1])


for indexB, iB in enumerate(dataB):
    Bx.append(dataB[indexB,0])

for indexB, iB in enumerate(dataB):
    By.append(dataB[indexB,1])

for indexX, iX in enumerate(dataX):
    Xx.append(dataX[indexX,0])

for indexX, iX in enumerate(dataX):
    Xy.append(dataX[indexX,1])


# find diffs
Ax_Xx = []
Ay_Xy = []

Bx_Xx = []
By_Xy = []

for iA in Ax:
    for iX in Xx:
        Ax_Xx.append(np.abs(iA-iX))

for iA in Ay:
    for iX in Xy:
        Ay_Xy.append(np.abs(iA-iX))

for iB in Bx:
    for iX in Xx:
        Bx_Xx.append(np.abs(iB-iX))

for iB in By:
    for iX in Xy:
        By_Xy.append(np.abs(iB-iX))

#add the x and ys to get city block distance

A_dist = [sum(value) for value in zip(Ax_Xx, Ay_Xy)]

B_dist = [sum(value) for value in zip(Bx_Xx, By_Xy)]

i = 0

for iA in A_dist:
    for iB in B_dist:
        if A_dist[i] > B_dist[i]:
            print("BAD!!!")
    

#print(A_dist)






# plot if you want

import matplotlib.pyplot as plt


plt.scatter(dataA[:,0], dataA[:,1], c = 'r', s=300, marker= (r'$A$'))
plt.scatter(dataB[:,0], dataB[:,1], c = 'b', s=300, marker= (r'$B$'))
plt.scatter(dataX[:,0], dataX[:,1], c = 'k', s=300, marker= (r'$X$'))
plt.axvline(x=0.5, ymin=0, ymax=1, color='k', linestyle='dotted', linewidth=2)
plt.axhline(y=0.5, xmin=0, xmax=1, color='k', linestyle='dotted', linewidth=2)
plt.xlim(-0.05,1.05)
plt.ylim(-0.05,1.05)
plt.xlabel("Size")
plt.ylabel("lightness")
plt.title("Replica of E1")
plt.savefig('replicaE1_structure_promote.png')
