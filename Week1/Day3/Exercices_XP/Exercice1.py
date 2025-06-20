class Cat():
  def __init__(self, cat_name,cat_age):
    self.name=cat_name
    self.age=cat_age
    
# Creation Cat Objects :
Cat1=Cat("ouscar",6)
Cat2=Cat("klara",2)
Cat3=Cat("lousi",4)

def plus_Grd_Cat(Cat1,Cat2,Cat3):
  plus_Grd=Cat1
  if Cat2.age>plus_Grd.age:
    plus_Grd=Cat2
  if Cat3.age>plus_Grd.age:
    plus_Grd=Cat3
  return plus_Grd

plus_Cat =plus_Grd_Cat(Cat1,Cat2,Cat3)
print(f"le chat le plus Grande est {plus_Cat.name} , et a {plus_Cat.age} ans")