 ## Python Standard Library
import sys
import os
import csv
import pickle

## External Dependencies
import numpy as np
import pandas as pd 
import matplotlib.pyplot as plt 
from matplotlib.offsetbox import OffsetImage, AnnotationBbox


# from: https://stackoverflow.com/questions/22566284/matplotlib-how-to-plot-images-instead-of-points <-- thanks joe kington
def imscatter(x, y, image, ax=None, zoom=1):
    if ax is None:
        ax = plt.gca()
    try:
        image = plt.imread(image)
    except TypeError:
        # Likely already an array...
        pass
    im = OffsetImage(image, zoom=zoom)
    x, y = np.atleast_1d(x, y)
    artists = []
    for x0, y0 in zip(x, y):
        ab = AnnotationBbox(im, (x0, y0), xycoords='data', frameon=False)
        artists.append(ax.add_artist(ab))
    ax.update_datalim(np.column_stack([x, y]))
    ax.autoscale()
    return artists









fig, ax = plt.subplots(
    1,2,
    figsize = [15,7],
)



data = pd.read_csv('data.csv')
colmap = {
    'a': 'orange',
    'b': 'blue',
    'gen': 'black'
}
data['color'] = data['Category'].map(lambda x: colmap[x])

ax[0].scatter(
    data['Dim1'],
    data['Dim2'],
    c = data['color'],
    s = 750,
)


for stim in data.index:
    imscatter(
        data.loc[stim,'Dim1'],
        data.loc[stim,'Dim2'],
        'stim0/' + data.loc[stim,'ID'] + '.png',
        ax = ax[1],
        zoom = .12,
    )








for a in ax.flatten(): [a.set_xticks([]), a.set_yticks([])]
# plt.tight_layout()
plt.savefig('disp.png')
