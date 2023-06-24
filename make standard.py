import numpy as np
from matplotlib.patches import Circle, Wedge, Polygon, RegularPolygon
from matplotlib.collections import PatchCollection
import matplotlib.pyplot as plt
import matplotlib as mpl
import matplotlib.path as mpath

max_ = 2.5
min_ = .6
space = np.linspace(min_, max_, np.arange(min_,max_,min_).shape[0]+1)

stimdims = np.array(
    np.meshgrid(space, space)
).reshape(2,-1).T
# stimdims = stimdims[np.random.choice(stimdims.shape[0], stimdims.shape[0]),:]

for s, stim in enumerate(stimdims):
    n1, n2 = [s % space.shape[0], s // space.shape[0]]

    t1, t2 = stim

    fig, ax = plt.subplots(
        figsize = [10,10]
    )

    ## add circle
    ax.add_patch(
        Circle([0,0], radius = .2, alpha = 1, zorder = 100, color = 'yellow')
    )

    for r in np.linspace(.001,.2035,100):
        ax.add_patch(
            Circle(
                [0,0], 
                radius = r, zorder = 100, facecolor = 'None', edgecolor = 'brown',
                alpha = 1 - np.exp(-.2 * (r/.2)),
            )
        )

    ax.add_patch(
        Circle([0,0], radius = max_, alpha = 1, zorder = 0, facecolor = 'None', edgecolor = 'black', linewidth = 2)
    )

    sw_ = .322
    sy_ = .5

    sw = .522
    sy = .5

    offset = -22.5

    a = 1

    for petal_orientation in (0, 120, 240):
        
        # outside
        x = [
            [0,0],
            [-sw,sy],
            [0,t1],
            [sw,sy],
            [0,0],
        ]

        codes = [
            mpath.Path.MOVETO,
            mpath.Path.CURVE3,
            mpath.Path.LINETO,
            mpath.Path.CURVE3,
            mpath.Path.LINETO,
            # mpath.Path.CLOSEPOLY,
        ]

        p_verts = mpath.Path(x, codes)
        p = mpl.patches.PathPatch(p_verts, color = '#3c268c', alpha = a, zorder = 20) # these are the best colors i could find for color blindness: #9c59ff  |  #3c268c  |  'purple'
        # r = mpl.transforms.Affine2D().rotate_deg_around(0,0, petal_orientation + offset) + ax.transData
        # p.set_transform(r)

        ax.add_patch(p)


        # inside
        x = [
            [0,.3],
            [-.05,.3],
            [0,.5],
            [.05,.3],
            [0,.3],
        ]

        codes = [
            mpath.Path.MOVETO,
            mpath.Path.CURVE3,
            mpath.Path.LINETO,
            mpath.Path.CURVE3,
            mpath.Path.LINETO,
        ]

        p_verts = mpath.Path(x, codes)
        p = mpl.patches.PathPatch(p_verts, color = 'yellow', alpha = .7, zorder = 20)
        r = mpl.transforms.Affine2D().rotate_deg_around(0,0, petal_orientation + offset) + ax.transData
        p.set_transform(r)

        ax.add_patch(p)





    for leaf_orientation in (60, 180, 300):

        # outside
        x = [
            [0,t2],
            [-sw,sy],
            [0,0],
            [sw,sy],
            [0,t2],
        ]

        codes = [
            mpath.Path.MOVETO,
            mpath.Path.CURVE3,
            mpath.Path.CURVE3,
            mpath.Path.CURVE3,
            mpath.Path.LINETO,
        ]

        p_verts = mpath.Path(x, codes)
        p = mpl.patches.PathPatch(p_verts, color = 'green', alpha = a)
        r = mpl.transforms.Affine2D().rotate_deg_around(0,0, leaf_orientation + offset) + ax.transData
        p.set_transform(r)

        ax.add_patch(p)

        y11 = .3
        y12 = .4
        y13 = .32
        y21 = .4
        y22 = .47
        y23 = .42




        # inside
        x = [
            [0, y21],
            [-.1, y22],
            [0, y23],

            [0, y23],
            [.1, y22],
            [-0, y21],
        ]

        codes = [
            mpath.Path.MOVETO,
            mpath.Path.LINETO,
            mpath.Path.LINETO,
            
            mpath.Path.LINETO,
            mpath.Path.LINETO,
            mpath.Path.LINETO,
        ]

        p_verts = mpath.Path(x, codes)
        p = mpl.patches.PathPatch(p_verts, color = '#005e1b', alpha = 1)
        r = mpl.transforms.Affine2D().rotate_deg_around(0,0, leaf_orientation + offset) + ax.transData
        p.set_transform(r)

        ax.add_patch(p)

        x = [
            [0, y11],
            [-.15, y12],
            [0, y13],
            
            [0, y13],
            [.15, y12],
            [0, y11],
            
        ]

        codes = [
            mpath.Path.MOVETO,
            mpath.Path.LINETO,
            mpath.Path.LINETO,
            
            mpath.Path.LINETO,
            mpath.Path.LINETO,
            mpath.Path.LINETO,
        ]

        p_verts = mpath.Path(x, codes)
        p = mpl.patches.PathPatch(p_verts, color = '#005e1b', alpha = 1)
        r = mpl.transforms.Affine2D().rotate_deg_around(0,0, leaf_orientation + offset) + ax.transData
        p.set_transform(r)

        ax.add_patch(p)






    fig.patch.set_visible(False)
    ax.axis('off')

    l1, l2 = [-(max_+.1), (max_+.1)]
    plt.xlim([l1,l2])
    plt.ylim([l1,l2])
    plt.xticks([]); plt.yticks([])

    # plt.savefig('test.png') # <-- test it out before full run
    # exit()

    plt.savefig('stim/'+ str(n1) + '-' + str(n2) +'.png')
    plt.close()
    print(n1,n2)
