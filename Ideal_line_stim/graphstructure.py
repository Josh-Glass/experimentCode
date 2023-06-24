import matplotlib.pyplot as plt
import numpy as np 



dataA = np.array([
    [1,50], # short
    [1,150], # short
    [1,250], # short
    [1,350], # short
    [1,450], # short
]) 


dataB = np.array([
    
    [1,550], # intermediate
    [1,650], # intermediate
    [1,750], # intermediate
    [1,850], # intermediate
    [1,950], # intermediate
    

])


dataC = np.array([
    
    [1,1050], # long
    [1,1150], # long
    [1,1250], # long
    [1,1350], # long
    [1,1450], # long


])

dataT = np.array([
    
    [1,500], #TEST
    [1,1000], #TEST


])


plt.scatter(dataA[:,1], dataA[:,0], c = 'r', s=150, marker= (r'$\alpha$'))
plt.scatter(dataB[:,1], dataB[:,0], c = 'b', s=150, marker= (r'$\beta$'))
plt.scatter(dataC[:,1], dataC[:,0], c = 'g', s=150, marker= (r'$\gamma$'))
plt.scatter(dataT[:,1], dataT[:,0], c = 'k', s=150, marker= (r'$T$'))

plt.ylim(0.99,1.1)
plt.xlim(20,1495)

plt.xlabel("length (in pixels)")
plt.title("Ideal Line Structure")
plt.savefig('structure_IdealLine.png')