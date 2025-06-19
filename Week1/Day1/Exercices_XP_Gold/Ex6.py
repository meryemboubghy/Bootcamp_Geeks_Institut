import random

gagnes = 0
perdues = 0


while True:
    try:
        nbr = int(input("Entre un nombre entre 1 et 9 : "))

        if nbr < 1 or nbr > 9:
            print("Le nombre doit être entre 1 et 9.")
            continue

        random_nbr = random.randint(1, 9)

        if nbr == random_nbr:
            print(" Gagnant !")
            gagnes += 1
        else:
            print(f" Meilleure chance la prochaine fois ! Le bon numéro était {random_nbr}.")
            perdues += 1

    except ValueError:
        print("Veuillez entrer un nombre valide.")




