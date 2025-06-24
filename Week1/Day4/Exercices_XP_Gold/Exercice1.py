class BankAccount:
    def __init__(self, balance, username, password):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def deposit(self, a):
        if not self.authenticated:
            raise PermissionError("Vous devez être authentifié pour déposer de l'argent.")
        if a > 0:
            self.balance += a
        else:
            raise ValueError("Le montant doit être positif.")

    def withdraw(self, a):
        if not self.authenticated:
            raise PermissionError("Vous devez être authentifié pour retirer de l'argent.")
        if a > 0:
            self.balance -= a
        else:
            raise ValueError("Le montant doit être positif.")

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            self.authenticated = False

# ✅MinimumBalanceAccount doit être une classe à part
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, a):
        if not self.authenticated:
            raise PermissionError("Vous devez être authentifié pour retirer de l'argent.")
        if a <= 0:
            raise ValueError("Le montant doit être positif.")
        elif self.balance - a < self.minimum_balance:
            raise ValueError("Solde insuffisant par rapport au minimum requis.")
        else:
            self.balance -= a

# ATM class
class ATM:
    def __init__(self, account_list, try_limit):
        if not isinstance(account_list, list):
            raise TypeError("account_list doit être une liste.")
        for acc in account_list:
            if not isinstance(acc, BankAccount):
                raise TypeError("Les éléments doivent être des comptes bancaires.")
        if not isinstance(try_limit, int) or try_limit <= 0:
            print("try_limit invalide. Valeur par défaut = 2 utilisée.")
            try_limit = 2

        self.account_list = account_list
        self.try_limit = try_limit
        self.current_account = None
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\nBienvenue à l'ATM")
            print("1. Connexion")
            print("2. Sortie")
            choix = input("Votre choix: ")

            if choix == "1":
                username = input("Nom d'utilisateur: ")
                password = input("Mot de passe: ")
                self.login(username, password)
            elif choix == "2":
                print("Merci d'avoir utilisé l'ATM. À bientôt!")
                break
            else:
                print("Choix invalide. Veuillez réessayer.")

    def login(self, username, password):
        for acc in self.account_list:
            if acc.username == username and acc.password == password:
                acc.authenticated = True
                self.current_account = acc
                self.current_tries = 0
                print(f" Connexion réussie. Bonjour, {username}!")
                self.show_account_menu(acc)
                return

        self.current_tries += 1
        print(" Nom d'utilisateur ou mot de passe incorrect.")
        if self.current_tries >= self.try_limit:
            print("Trop de tentatives. L'accès est bloqué.")
            exit()

    def show_account_menu(self, account):
        while True:
            print("\nMenu du compte:")
            print("1. Déposer de l'argent")
            print("2. Retirer de l'argent")
            print("3. Sortir")
            choix = input("Votre choix: ")

            if choix == "1":
                try:
                    montant = float(input("Montant à déposer: "))
                    account.deposit(montant)
                    print(f" Nouveau solde: {account.balance}")
                except Exception as e:
                    print(" Erreur lors du dépôt:", e)

            elif choix == "2":
                try:
                    montant = float(input("Montant à retirer: "))
                    account.withdraw(montant)
                    print(f"Nouveau solde: {account.balance}")
                except Exception as e:
                    print(" Erreur lors du retrait:", e)

            elif choix == "3":
                print("Retour au menu principal.")
                break
            else:
                print(" Choix invalide. Veuillez réessayer.")

    

acc1 = BankAccount(500, "meryem", "1234")
acc2 = MinimumBalanceAccount(300, "Aziza", "abcd", minimum_balance=100)

atm = ATM([acc1, acc2], try_limit=3)
      
    
        
    
    
