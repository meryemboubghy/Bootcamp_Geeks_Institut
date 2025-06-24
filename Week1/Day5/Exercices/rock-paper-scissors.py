from game import Game

def get_user_menu_choice():
    print("\n>>> Menu <<<")
    print("1. Jouer à une nouvelle partie")
    print("2. Afficher les scores")
    print("3. Quitter")
    choix = input("Votre choix : ").strip()

    if choix == "1":
        return "play"
    elif choix == "2":
        return "scores"
    elif choix == "3":
        return "exit"
    else:
        print("Choix invalide. Veuillez sélectionner 1, 2 ou 3.")
        return None

def print_results(results):
    print("\n--- Résumé des résultats ---")
    print(f"Victoires : {results.get('Gagne', 0)}")
    print(f"Défaites : {results.get('Match nul', 0)}")
    print(f"Égalités : {results.get('perte', 0)}")
    print("Merci d'avoir joué ! ")

def main():
    results = {"Gagne": 0, "Match nul": 0, "perte": 0}
    while True:
        choix = get_user_menu_choice()
        if choix == "play":
            jeu = Game()
            result = jeu.play()
            results[result] += 1
        elif choix == "scores":
            print_results(results)
        elif choix == "exit":
            print_results(results)
            break

if __name__ == "__main__":
    main()
