class Farm():
  def __init__(self,farm_name):
    self.farm_name=farm_name
    self.animals={}
  # methode pour ajouter animals :
  def add_animal(self,animal_type,count=1):
    if animal_type in self.animals:
      self.animals[animal_type]+=count
    else:
      self.animals[animal_type] = count
  def get_info(self):
      print(f"Nom de la ferme : {self.farm_name} ")
      print(f"les animaux dans la ferm : \n")
      for animal,count in self.animals.items():
        print(f"{animal} : {count}")
      print("EIEI-0 ! ")
  def get_animal_types(self):
   return sorted(self.animals.keys())
  def get_short_info(self):
    animal_types = self.get_animal_types()
    names = []
    for animal in animal_types:
        count = self.animals[animal]
        animal_name = animal + "s" if count > 1 else animal
        names.append(animal_name)
    print("DEBUG names:", names)  
    if len(names) == 0:
        animaux_str = ""
    elif len(names) == 1:
        animaux_str = names[0]
    else:
        animaux_str = ", ".join(names[:-1]) + " et " + names[-1]
    return f"La ferme {self.farm_name} a des {animaux_str}."
    

# Creer objet :
macdonald = Farm("McDonald")
# Appelez lz fonctions :
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')    
macdonald.add_animal('sheep')     
macdonald.add_animal('goat', 12)

macdonald.get_info()
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
