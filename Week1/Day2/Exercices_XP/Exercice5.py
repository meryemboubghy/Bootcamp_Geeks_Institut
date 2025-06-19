import random

def fonction(nbr):
  if nbr >= 1 and nbr <= 100:
    nbr_aleatoir=random.randint(1,100)
    if nbr==nbr_aleatoir:
          print("Success!")
    else:
         print(f"Fail! your number :{nbr}, Random number :{nbr_aleatoir}")
  else:
    print("Le nombre doit être entre 1 et 100")
  
fonction(10)
fonction(50)
fonction(80)