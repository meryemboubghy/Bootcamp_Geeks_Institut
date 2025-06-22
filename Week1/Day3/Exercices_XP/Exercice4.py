class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animals):
        for animal in new_animals:
            if animal not in self.animals:
                self.animals.append(animal)

    def get_animals(self):
        print("Liste des animaux :", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"L'animal '{animal_sold}' a été vendu.\n")
        else:
            print(f"L'animal '{animal_sold}' n'existe pas dans le zoo.")

    def sort_animals(self):
        sort_animal = sorted(self.animals)
        grp_animal = {}
        for animal in sort_animal:
            first_letter = animal[0].upper()
            if first_letter not in grp_animal:
                grp_animal[first_letter] = [animal]
            else:
                grp_animal[first_letter].append(animal)
        return grp_animal

    def get_grp(self):
        grp = self.sort_animals()
        for key in grp:
            print(f"{key}: {grp[key]}")


mon_zoo = Zoo("Mon Beau Zoo")

# Ajouter des animaux
mon_zoo.add_animal(["tigre", "zèbre", "singe", "lion", "léopard", "chat", "chien"])

# Vendre un animal
mon_zoo.sell_animal("tigre")
mon_zoo.sell_animal("éléphant")

# Afficher la liste
mon_zoo.get_animals()

# Afficher les animaux groupés
mon_zoo.get_grp()