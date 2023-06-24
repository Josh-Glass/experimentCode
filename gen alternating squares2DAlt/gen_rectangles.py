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
    [.26,.02], # A
    [.26,.32], # A
    [.26,.56], # A

    [.06,.5], # B
    [.06 ,.76], # B
    [.06,1], # B

    [.46,.5], # B
    [.46,.76], # B
    [.46,1], # B

    [.66,.02], # A
    [.66,.32], # A
    [.66,.56], # A

    [.86,.02], # generalzation test items
    [.86,.56], # generalzation test items
    [.86,1], # generalzation test items
])

for index, i in enumerate(data):
    generate_square(i[0], i[1], 'images/' + str(index) + '.png')





# plot if you want

import matplotlib.pyplot as plt

labels = [0,0,0,1,1,1,1,1,1,0,0,0,2,2,2]

plt.scatter(
    data[:,0],
    data[:,1],
    c = labels,
)

plt.savefig('structure.png')
