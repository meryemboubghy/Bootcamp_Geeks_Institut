word=input("Enter a Word : ")

letters={}
for index , letter in enumerate(word):
  if letter in letters:
    letters[letter].append(index)
  else:
    letters[letter]=[index]
  
print(letters)
