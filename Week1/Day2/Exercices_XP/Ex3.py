# 1 :
brand={
  "name":"zara",
  "creation_date": 1975,
  "creator_name":" Amancio Ortega Gaona",
  "type_of_clothes": ["men", "women", "children","home"],
  "international_competitors": ["Gap", "H&M", "Benetton"],
  "number_stores": 7000,
  "major_color": {
    "France": "blue", 
    "Spain":"red" , 
    "US": ["pink","green"]
    }
}

print("avant la modification :\n ",brand)
# 2 : Modification de valeur :
brand["number_stores"]=2
print("\n apres la modification :\n ",brand)

# 3 :
types=[]

for valeur in brand["type_of_clothes"]:
  types.append(valeur)
print(f"Les Clients de Zara aiment {types}")

# 4 : pour ajouter un cle , valeur :
print("**********************************************")
brand["country_creation"] ="Spain"
print(brand)

# 5 : la verification 
if "international_competitors" in brand:
  brand["international_competitors"].append("Desigual ")
  print("***************************************************************")
  print(brand["international_competitors"])
  
# 6 : supprimer un cle :
del brand["creation_date"]
print("<<<<<<<<<<<<<<<<<<<<<<<><<<<>>>>>>>>>>>>>>>>>>")
print("\n Apres la Suppression ", brand)

# 7 : Affichier la dernier element de un cle dans list 

print("Dernier international_competitors :",brand["international_competitors"][-1])

# 8 :
print("Couleurs principales aux Etats-Unis" , brand["major_color"]["US"])

# 9 : 
print("Le nombres de cles dans le dictionnaire est :",len(brand))
# 10 :
print("touts les cles du dictionnaire ",list(brand.keys()))

# Prime :
more_on_zara={
  "creation_date":1975,
  "number_stores":2000
}
# Fusionnez les deux dictionnaire 
brand.update(more_on_zara)
print("\n _________________Apres la Fusionation_________")
print(brand)