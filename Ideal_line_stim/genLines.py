import numpy as np 
from PIL import Image, ImageDraw




# # # # # # # # # # # # # # # # 
# 
#  Square Creator Function
# 
# # # # # # # # # # # # # # # # 

def generate_square(dim1, filename):
    lab_monitor = 1440/41 #<-- pixel info about lab monitor ensuring correct sizes
    res_w = lab_monitor

    # get correct dims
    #dim1 = ( (dim1) * (7.1 - 2.5) ) + 2.5


    d = dim1 #* res_w

    # size of image
    v=250
    canvas = (1500,40)

    # something for saving it (idk i didn't write these next parts)
    thumb = canvas[0], canvas[1]

    # init canvas
    im = Image.new('RGBA', canvas, (255, 255, 255, 255))
    draw = ImageDraw.Draw(im)

    # draw rectangles
    x1 = canvas[0]/2 - d/2
    y1 = canvas[1]/2 + 10#d/2
    x2 = canvas[0]/2 + d/2
    y2 = canvas[1]/2 - 10#d/2

    draw.rectangle([x1, y1, x2, y2],
        outline = (0, 0, 0, 255), 
        fill = (0,0,0,255),
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
    [1,50], # short
    [1,150], # short
    [1,250], # short
    [1,350], # short
    [1,450], # short
    [1,500], #TEST
    [1,550], # intermediate
    [1,650], # intermediate
    [1,750], # intermediate
    [1,850], # intermediate
    [1,950], # intermediate
    [1,1000], #TEST
    [1,1050], # long
    [1,1150], # long
    [1,1250], # long
    [1,1350], # long
    [1,1450], # long


])    


for index, i in enumerate(data):
    generate_square(i[1], 'images/' + str(i[1]) + '.png')

