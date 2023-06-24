import numpy as np
import pandas as pd 

import shapes

data = pd.read_csv('data.csv')

for stim in data.index:

    stim_id = data.loc[stim, 'ID']
    category = data.loc[stim, 'Category']

    d1 = data.loc[stim, 'Dim1']
    d2 = data.loc[stim, 'Dim2']

    shapes.generate_flower(d1, d2, 'stim/' + stim_id + '.png', compress_edge = False) # <-- arguments are: ( feature 1, feature 2, filename )
