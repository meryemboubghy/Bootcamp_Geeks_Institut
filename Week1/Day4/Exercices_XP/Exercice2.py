class Dog:
  def __init__(self, name, age, weight):
    self.name = name
    self.age = age
    self.weight = weight

  def bark(self):
    print("aboie")

  def run_speed(self):
    return (self.weight / self.age) * 10

  def fight(self, other_dog):
    self_power = self.run_speed() * self.weight
    other_power = other_dog.run_speed() * other_dog.weight

    if self_power > other_power:
      return f"{self.name} a gagne le combat."
    elif self_power < other_power:
      return f"{other_dog.name} a gagne le combat."
    else:
      return "Match nul."


# Création des objets
dog1 = Dog("x", 3, 20)
dog2 = Dog("y", 4, 19)
dog3 = Dog("Z",5,25)

# Test du chien :

print(dog1.bark())
print(dog1.run_speed())
print(dog1.fight(dog2))
