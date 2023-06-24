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
    dim1 = ( (dim1) * (230 - 25) ) + 25
    dim2 = ( (dim2) * (7.1 - 2.5) ) + 2.5


    d = dim2 * res_w
    s = int(np.round(dim1))

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

data = np.array([
    [.32,.32], # A1
    [.49,.32], # A2
    [.77,.75], # A3
    [.94,.75], # A4

    [.10,.94], # B1 cond1 extra exemplars
    [.27,.94], # B2 cond1 extra exemplars

    [.32,.94], # B3 cond2 extra exemplars
    [.49,.94], # B4 cond 2 extra exemplars

    [.77,.94], # B5 cond3 extra exemplars
   [.94,.94], # B6 cond3 extra exemplars

    [.32, .75], # B lower1
    [.49, .75], #B lower2

    [.04, .76], #test1,1
    [0.04, .63], #test1,2
    [.04, .48], #test1,3
    [.04, .33], #test1,4

    [.10, .76], #test2,1
    [.10, .63], #test2,2
    [.10, .48], # test2,3
    [.10, .33], # test2,4

    [.18, .76], #test3,1
    [.18, .63], #test3,2
    [.18, .48], # test3,3
    [.18, .33], # test3,4

   [.25, .76], #test4,1
    [.25, .63], #test4,2
    [.25, .48], # test4,3
   [.25, .33], # test4,4

    [0.32, .63], # test5,1
    [0.32, .48], # test5,2
    [0.32, .25], # test5,3
    [.32, .15], #test5,4

    [0.49, .63], # test6,1
    [0.49, .48], # test6,2
    [0.49, .25], # test6,3
    [.49, .15], #test6,4

    [.70, .47], #test7,1
    [.70, .42], #test7,2
    [.70, .37],#test7,3
    [.70, .32], #test7,4
    [.70, .27], #test7,5
    [.70, .22], #test7,6

    [.77, .47],  #test8,1
    [.77, .42], #test8,2
    [.77, .37],  #test8,3
    [.77, .32], #test8,4
   [.77, .27],  #test8,5
    [.77, .22], #test8,6

    [.85, .47], #test9,1
    [.85, .42], #test9,2
    [.85, .37], #test9,3
    [.85, .32], #test9,4
   [.85, .27], #test9,5
    [.85, .22], #test9,6

   [.94, .47],  #test10,1
    [.94, .42], #test10,2
    [.94, .37], #test10,3
    [.94, .32], #test10,4
    [.94, .27], #test10,5
    [.94, .22], #test10,6

])    


#for index, i in enumerate(data):
    #generate_square(i[0], i[1], 'images/' + str(index) + '.png')





# plot if you want

import matplotlib.pyplot as plt

#labels = [0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4]
labels = ['r','r','r','r','b', 'b', 'b', 'b', 'b', 'b', 'b','b', 'y', 'y','y','y', 'y', 'y', 'y', 'y','y','y','y','y','y','y',
'y','y', 'y', 'y','y','y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y','y','y','y','y','y','y',
'y','y', 'y', 'y','y','y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y']
plt.scatter(
        data[:,0],
        data[:,1],
        c = labels,
)
plt.xlabel("Shading")
plt.ylabel("Size")
plt.title("Stimuli Dimensions")
plt.savefig('structure.png')
