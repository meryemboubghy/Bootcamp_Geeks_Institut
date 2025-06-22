import math

class Circle():
  def __init__(self,rayon=1.0):
    self.rayon=rayon
  
  def perimeter(self):
      return 2 * math.pi * self.rayon
  def surface(self):
       return math.pi * (self.rayon ** 2)
  def print_definition(self):
       print("Un cercle est un ensemble de points situés à égale distance du centre, appelé rayon.")
    
c = Circle(3)
print(f"Périmètre : {c.perimeter():.2f}")
print(f"Surface : {c.surface():.2f}")
c.print_definition()
  