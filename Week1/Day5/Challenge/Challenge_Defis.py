
# Défi 1 : Trier >>>

def Trier():
  mots = input("Entrez Votre Mots separer par des virgules :")
  list_mots=[mot.strip() for mot in mots.split(',')]
  list_trie= sorted(list_mots)
  res = ",".join(list_trie)
  print("Resultat : " , res)
  
# mots.split(',')>>>> La méthode split(sep) permet de couper une chaîne en une liste de morceaux, selon le séparateur sep.
# Sorted()>>>>> trier par alphabetique

# Défi 2 : Le Mot le plus lONG >>>>
def plus_long(phrase) :
  mots = phrase .split()
  mot_plus_long = max(mots , key=len)
  return mot_plus_long

print(plus_long("Margaret's toy is a pretty doll."))        
print(plus_long("A thing of beauty is a joy forever."))      
print(plus_long("Forgetfulness is by all means powerless!"))
  
  