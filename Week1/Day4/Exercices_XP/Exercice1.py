class Cat:
  def __init__(self,nom,age):
    self.nom=nom
    self.age=age
  
  def speak(self):
    return f"{self.nom} dit Miaou !"
  
class Siamese(Cat):
  def __init__(self,nom,age,eye_color):
    super().__init__(nom,age)
    self.eye_color=eye_color
    
  def description(self):
    return f"Je suis un chat siamese nomme {self.nom} , j'ai {self.age} ans et mes yeux sont de color {self.eye_color}"

# cat1=Siamese("oscare",5,"bleu")
# print(cat1.description())

class Bengal(Cat):
  def __init__(self,nom,age):
    super().__init__(nom,age)
    
  def description(self):
    return f"Je suis un chat Bengal nomme {self.nom} , j'ai {self.age} ans "

    
class Chartreux(Cat):
  def __init__(self,nom,age):
    super().__init__(nom,age)
  def description(self):
    return f"Je suis un chat Chartreux nomme {self.nom} , j'ai {self.age} ans "

    
# creation les trois d'objet et ajouter dans une liste 
bengal_obj=Bengal("tiger",3)
chartreux_obj=Chartreux("unique",4)
siamese_obj=Siamese("oscare",5,"bleu")

# ajouter dans une liste : cette list il permet utilise un bocle for pour affichier toutes les chats :

all_cats =[bengal_obj, chartreux_obj, siamese_obj]

class Pets:
  def __init__(self,cats):
    self.cats=cats
    
  def walk(self):
    for cat in self.cats:
      print(cat.description())

# Instanciation :
sara_pets = Pets(all_cats)
sara_pets.walk()