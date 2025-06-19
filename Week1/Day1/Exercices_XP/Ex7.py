# les méthodes : append, remove, insert, count,clear

basket=["Banana", "Apples", "Oranges", "Blueberries"]

# pour supprimer un element de la liste:
basket.remove("Banana")
basket.remove("Blueberries")

#pour Ajouter un element a la fin de la liste :
basket.append("kiwi")

# Ajouter un element au debut de la liste:
basket.insert(0,"Apples")

# Comptez combien de fois "Apples"il apparaît dans la liste:
count=basket.count("Apples")

# Affichage :
print("liste avant de vider  :")
print("La list est :",basket)
print("Nombre de Apples sur la liste : ",count)

# Vider la liste :

basket.clear()
print("liste apres de vider  :")
print(basket)





