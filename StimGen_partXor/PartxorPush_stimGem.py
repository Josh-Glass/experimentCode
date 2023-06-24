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

data = np.array([
    [0.32,.25], # A1
    [.42,.35], # A2
    [.77,.75], # A3
    [.87,.85], # A4

    [.20,.95], # B1 cond1 extra exemplars
    [.30,.85], # B2 cond1 extra exemplars

    #[.35,.90], # B3 cond2 extra exemplars
    #[.45,.90], # B4 cond 2 extra exemplars

    [.40,.85], # B5 cond3 extra exemplars
    [.50,.95], # B6 cond3 extra exemplars

    [.32, .80], # B lower1
    [.22, .70], #B lower2

    [0.7,0.2], #test
    [0.7,0.3], #test
    [0.7,0.4], #test

    [0.8,0.2], #test
    [0.8,0.3], #test
    [0.8,0.4], #test

    [0.9,0.2], #test
    [0.9,0.3], #test
    [0.9,0.4], #test

    [0.32,0.15], #test
    [0.42,0.15], #test

    [0.2,0.5], #test
    [0.1,0.5], #test





])    


for index, i in enumerate(data):
    generate_square(i[0], i[1], 'images/' + str(index) + '.png')





# plot if you want

import matplotlib.pyplot as plt

#labels = [0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4]
labels = ['r','r','r','r','b','b', 'b','b', 'b', 'b','y','y','y', 'y','y','y','y','y','y', 'y','y', 'y', 'y']
plt.scatter(
        data[:,0],
        data[:,1],
        c = labels,
)
plt.xlabel("Shading")
plt.ylabel("Size")
plt.title("all conditions")
plt.savefig('partXorPush_structure.png')
