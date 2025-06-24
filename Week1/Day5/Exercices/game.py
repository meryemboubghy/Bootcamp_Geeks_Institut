import random


class Game :
    def __init__(self ):
        self.options = ["pierre" , "feuille" ,"ciseaux"]
    def get_user_item(self):
      while True:
        choix = input("Choisissez un elements : Pierre , Feuille , Ciseaux :")
        choix_nrml= choix.lower()
        if choix_nrml in self.options:
            return choix_nrml
        else:
           print("Invalide . Veuillez choisir :Pierre , Feuille , Ciseaux")
    def get_computer_item(self):
      return random.choice(self.options)
    def get_game_result(self, user_item, computer_item):
      if ( (user_item == "pierre" and computer_item =="ciseaux") or
         (user_item == "ciseaux" and computer_item =="feuille")or
         (user_item == "feuille" and computer_item == "pierre")
         ):
        return "Gagne"
      elif user_item == computer_item:
        return "Match nul"
      else:
        return "perte"
    def play(self):
      user_item = self.get_user_item()
      computer_item = self.get_computer_item()
      result = self.get_game_result(user_item,computer_item)
      print(f"Vous avez selectionne : {user_item.capitalize()}")
      print(f"L'ordinateur a selectionne : {computer_item.capitalize()}")
      print(f"Résultat : {result}")
      return result
      
         
      
        
      
  
          
test = Game()
item = test.get_user_item()
computer_item = test.get_computer_item()


          
      