
# Exemple : si l'entrée est, Cortananous devrions imprimer l'index 1


names = ['Samus', 'Cortana', 'v', 'Link', 'Mario', 'Cortana', 'Samus']

name = input("Enter Votre Nom :")

if name in names:
  index = names.index(name)
  print(f"Le nom  {name} sur l'index : {index}")

