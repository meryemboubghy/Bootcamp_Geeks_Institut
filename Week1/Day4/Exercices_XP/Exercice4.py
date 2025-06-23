class Person:
  def __init__(self,first_name,age):
    self.first_name=first_name
    self.age=age
    self.last_name=""
  def is_18(self):
    if self.age >=18:
      return True
    else:
      return False

class Family():
  def __init__(self,last_name):
    self.last_name=last_name
    self.members=[]
  def born(self , first_name ,age):
    new_person= Person(first_name,age)
    new_person.last_name = self.last_name
    self.members.append(new_person)
    
  def check_majority(self,first_name):
    for member in self.members:
      if member.first_name.lower()==first_name.lower():
        if member.is_18():
         print("You are over 18, your parents Jane and John accept that you will go out with your friends")
        else:
         print("Sorry, you are not allowed to go out with your friends.")
        return  # sortir dès qu'on a trouvé la personne
    print(f"No member found with the first name {first_name}.")
  def family_presentation(self):
    print(f"Nom de famille est : {self.last_name}")
    print("Member de la famille :")
    for member in self.members:
      print(f"{member.first_name},{member.age} ans")
      
famille1=Family("Boubghy")
famille1.born("Meryem",26)
famille1.born("malika",33)
famille1.born("reda",31)
famille1.check_majority("meryem")
famille1.family_presentation()
        
      
    
    
     