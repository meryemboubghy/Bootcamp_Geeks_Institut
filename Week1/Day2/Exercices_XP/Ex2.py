family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

nbr = 0

for nom, age in family.items():
    if age < 3:
        prix = 0
    elif age >= 3 and age <= 12:
        prix = 10
    else:  # age > 12
        prix = 15
    print(f"{nom} (âge: {age} ans) doit payer: {prix} $")
    nbr += prix

print(f"\nCoût total pour la famille : {nbr} $")




