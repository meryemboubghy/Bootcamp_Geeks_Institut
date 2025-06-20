class Dog():
  def  __init__(self ,name,height):
    self.name=name
    self.height=height
  def bark(self):
    print("fait ouaf !")
  def jump(self):
    print(f"sauts {self.height*2}cm de haut !")
  
davids_dog=Dog("bobis",20)
sarahs_dog=Dog("Rex",50)


davids_dog.bark()
davids_dog.jump()

sarahs_dog.bark()
sarahs_dog.jump()

