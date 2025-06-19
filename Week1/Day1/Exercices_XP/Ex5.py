# creation Ensembles :
my_fav_numbers={1,2,3,4,5,6}

friend_fav_numbers={11,12,13}

# Pour ajouter un element :
my_fav_numbers.update({7,8,9,10})


# Pour Supprimer element :
my_fav_numbers.discard(9)
my_fav_numbers.discard(10)

# pour concatenation des deux elements (function union) :
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)


# Affichage

print("Mes  numéros préférés :",my_fav_numbers)
print("les numéros préférés de mon ami  :",friend_fav_numbers)
print("Tous les numéros préférés :" , our_fav_numbers)


