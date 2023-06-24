import numpy as np 
from PIL import Image, ImageDraw
from matplotlib.pyplot import figure




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
    

    [15,5], # A1 angle 1 size 2
    [20,5], # A2
    [25,5], # A3





  

    [118,5], # A1 angle 2 size 2
    [123,5], # A2
    [128,5], # A3

]) 


dataB = np.array([
   

    [66.5,5], # B1 angle 1 size 4
    [71.5,5], # B2
    [76.5,5], # B3


    
    
    
    
    
    
    

    [169.5,5], # B1 angle 2 size 4
    [174.5,5], # B2
    [179.5,5], # B3

    

    






]) 


dataX = np.array([
   

    

    [221,5], # test angle 1 size 4
    [226,5], #
    [231,5],   #

    







    [272.5,5],
    [277.5,5], 
    [282.5,5],








    [324,5],
    [329,5], 
    [334,5],


    

]) 

















# plot if you want

import matplotlib.pyplot as plt


plt.rcParams['font.size'] = '50'


#plt.axvline(x=0.5, ymin=0, ymax=1, color='k', linestyle='dotted', linewidth=2)
#plt.axhline(y=0.5, xmin=0, xmax=1, color='k', linestyle='dotted', linewidth=2)
#plt.xlim(0,340)
figure(figsize=(75, 15), dpi=100)
plt.xlim(0,340)
plt.autoscale(True)
plt.ylim(4,6)
plt.autoscale(enable=True, axis='y')
plt.tick_params(left = False , labelleft = False)
plt.scatter(dataA[:,0], dataA[:,1], c = 'r', s=9000, marker= (r'$A$'))
plt.scatter(dataB[:,0], dataB[:,1], c = 'b', s=9000, marker= (r'$B$'))
plt.scatter(dataX[:,0], dataX[:,1], c = 'k', s=10100, marker= (r'$?$'))
plt.xticks(fontsize=55)



plt.xlabel("Angle (degrees)")
plt.ylabel("Diameter (constant)")
plt.title("One Dimensional Stimuli")
plt.savefig('1D_Alt_Dials.png')
