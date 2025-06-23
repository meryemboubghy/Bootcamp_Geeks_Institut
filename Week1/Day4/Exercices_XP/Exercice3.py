from Exercice2 import Dog
import random


class PetDog(Dog):
  def __init__(self,name,age,weight):
    super().__init__(name,age,weight)
    self.trained = False
  def train(self):
    super().bark()
    self.trained = True
  
  # Nous utiliserons @staticmethod car cette fonction ne depoend pas d'un chien specifique (self),mais d'un ensemble de chiens 
  
  @staticmethod 
  def play(*dogs):
    print("tous jouent ensemble !")
    
  def do_a_trick(self):
    if self.trained:
      tricks =["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
      trick=random.choice(tricks)
      print(f"{self.name} ,{trick}")
    else:
      print(f"{self.name} ne pas en entraine")
      
my_dog = PetDog("Fido", 2, 10)
my_dog.train()
my_dog.play("Buddy", "Max", "Fido")
my_dog.do_a_trick()
    
    
  