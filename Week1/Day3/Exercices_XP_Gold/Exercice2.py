import random

class MyList():
  def __init__ (self,letters):
    self.letters=letters
  def reverse_list(self):
    # pour retourne la liste inversee :
    return self.letters[::-1]
  def sorted_list(self):
    return sorted(self.letters)
  def random_list(self):
    return [random.randint(0,100) for _ in range(len(self.letters))]
  

ma_liste = MyList(['a', 'b', 'c', 'd'])

print("Liste inversée :", ma_liste.reverse_list())
print("Liste aléatoire :", ma_liste.random_list())
print("sorted list  :", ma_liste.sorted_list())