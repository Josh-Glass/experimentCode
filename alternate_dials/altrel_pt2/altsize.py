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
    [20,4], # A2

    [20,5], # A2

    [20,6], # A2

    [20,7], # A2




    [123,4], # A2

    [123,5], # A2

    [123,6], # A2

    [123,7], # A2

    





]) 


dataB = np.array([
   
    [71.5,2], # B2

    [71.5,3], # B2

    [71.5,4], # B2

    [71.5,5], # B2


    
    
    
    
    
    
    
    [174.5,2], # B2

    [174.5,3], # B2

    [174.5,4], # B2

    [174.5,5], # B2

    

    






]) 


dataX = np.array([
   

    [226,2], #

    [226,3], #

    [226,4], #

    [226,5], #

    [226,6], #

    [226,7], #






    [277.5,2], 

    [277.5,3], 

    [277.5,4], 

    [277.5,5], 

    [277.5,6], 

    [277.5,7], 







    [329,2], 

    [329,3], 

    [329,4], 

    [329,5], 

    [329,6], 

    [329,7], 

    

]) 

















# plot if you want

import matplotlib.pyplot as plt


plt.scatter(dataA[:,0], dataA[:,1], c = 'r', s=150, marker= (r'$A$'))
plt.scatter(dataB[:,0], dataB[:,1], c = 'b', s=150, marker= (r'$B$'))
plt.scatter(dataX[:,0], dataX[:,1], c = 'k', s=300, marker= (r'$?$'))


#plt.axvline(x=0.5, ymin=0, ymax=1, color='k', linestyle='dotted', linewidth=2)
#plt.axhline(y=0.5, xmin=0, xmax=1, color='k', linestyle='dotted', linewidth=2)
#plt.xlim(0,340)
#plt.ylim(0,8)
plt.xlabel("Angle (degrees)")
plt.ylabel("Diameter (inches)")
plt.title("Two Dimensional Stimuli")
plt.savefig('2D_Alt_Dials.png')
