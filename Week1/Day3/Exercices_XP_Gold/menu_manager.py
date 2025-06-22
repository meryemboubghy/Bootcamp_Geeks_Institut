class MenuManager():
  def __init__(self):
    self.menu=[
      {"nom" : "Soup","prix":10, "niveau_epices":"B","indice_gluten":False},
      {"nom": "Hamburger", "prix": 15, "niveau_epices": "A", "indice_gluten": True},
      {"nom": "Salad", "prix": 18, "niveau_epices": "A", "indice_gluten": False},
      {"nom": "French Fries", "prix": 5, "niveau_epices": "C", "indice_gluten": False},
      {"nom": "Beef bourguignon", "prix": 25, "niveau_epices": "B", "indice_gluten": True}
    ]
  def add_item(self,name,price,spice,gluten):
    nv_menu={
      "nom":name,
      "prix":price,
      "niveau_epices": spice,
      "indice_gluten": gluten
    }
    self.menu.append(nv_menu)
    # Ajouter  plat à la liste menu
    self.menu.append(new_dish)
  def update_item(self,name, price, spice, gluten):
    for plat in self.menu:
      if plat["nom"].lower()==name.lower():
         plat["prix"]=price
         plat["niveau_epices"] = spice
         plat["indice_gluten"] = gluten
         print(f"Le plat '{name}' a été mis à jour.")
         return
      print(f"Le plat '{name}' n'est pas dans le menu.")
  def remove_item(self,name):
    for i,plat in enumerate(self.menu):
      if plat["nom"].lower()==name.lower():
        del self.menu[i]
        print(f"Le plat '{name}' a été supprimé du menu.")
        print("Menu mis à jour :", self.menu)
        return
    print(f"Le plat '{name}' n'est pas dans le menu.")
      
menu=MenuManager()
print(menu.menu)
menu.remove_item("Soup")
print(menu.menu)

