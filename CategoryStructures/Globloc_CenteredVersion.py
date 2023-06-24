from cProfile import label
import numpy as np 
import matplotlib.pyplot as plt
import pandas as pd

data_all = np.array([
     
     [.04,.98], # B
    [.12,.74], # B
    [.24,.88], # B

    [.36,.04], # B
    [.56,.1], # B
    [.7,.52], # B




    [.02,.02], # A
    [.08,.08], # A
    [.14,.14], # A

    [.2,.2], # A
    [.26,.26], # A
    [.32,.32], # A



    [.12, .28],  # generalization test item
    [.28, .12],  # generalzation test items
    [.48, .48],  # generalization test item
    [.6, .6],  # generalzation test items

    [.8, .6],  # generalzation test items

])

data_a = np.array([
  

    [.32,.32], # A
    [.38,.38], # A
    [.44,.44], # A

    [.50,.50], # A
    [.56,.56], # A
    [.62,.62], # A


])


data_b = np.array([

    [.12,.88], # B
    [.22,.76], # B

    [.4,.02], # B
    [.3,.14], # B

    [.8,.56], # B
    [.9,.44], # B

])

data_t = np.array([

    [.05, .05],  # generalization test item
    [.15, .15],  # generalzation test items
    [.8, .8],  # generalization test item
    [.9, .9],  # generalzation test items

    [.9, .7],  # generalzation test items

    

    

    


])


data_g = np.array([

   [.78,.14], # C
   [.9,.06], # C
   [.94,.18], # C

   [.04,.44], # C
   [.06,.62], # C
   [.18,.58], # C


])


data_d = np.array([

   [.26, 1], # D
   [.34, 1], # D
   [.42, 1], # D

   [.5, 1], # D
   [.58, 1], # D
   [.66, 1], # D
])




average_Ax = np.mean(data_a[:,0])
average_Ay = np.mean(data_a[:,1])



average_Bx = np.mean(data_b[:,0])
average_By = np.mean(data_b[:,1])


plt.scatter(data_a[:,0],data_a[:,1], c= 'darkred', s= 250, edgecolor= 'darkred', linewidths=1, marker= 'o', label= (r'$\alpha$'))
plt.scatter(data_b[:,0],data_b[:,1],c = 'darkblue', s= 250, edgecolor= 'darkblue', linewidths=1, marker = 'o', label= (r'$\beta$'))
plt.scatter(data_t[:,0],data_t[:,1], c = 'y', s= 300, edgecolor= 'y', linewidths=3, marker = r'$T$', label = ('test'))
plt.scatter(average_Ax,average_Ay, c= 'darkred', s= 300, edgecolor= 'k', marker= '*', label= (r'$\alpha$' + " proto"))
plt.scatter(average_Bx,average_By, c= 'darkblue', s= 300, edgecolor= 'k', marker= '*', label= (r'$\beta$' + " proto"))


plt.subplots_adjust(left=0.1, bottom=0.1, right=0.80, top=0.8)
plt.legend(bbox_to_anchor=(1,1), loc="upper left")
#plt.legend(loc="lower right")
plt.xlabel("Dimension 1")
plt.ylabel("Dimension 2")
plt.title("Globloc structure centered version")
plt.savefig('Globloc_CenteredVersion.png')