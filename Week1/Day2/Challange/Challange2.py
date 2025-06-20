

matrix=[
  ['7' ,'i' ,'i'],
  ['T' ,'s' ,'x'],
  ['h' ,'%' ,'?'],
  ['i', '#','0' ],
  ['s' ,'M','5' ],
]

letters=[]

rows =len(matrix)
cols = len(matrix[0])

for col in range(cols):
  for row in range(rows):
    caracter =matrix[row][col]
    if caracter.isalpha():
      letters.append(caracter)

res = ' '.join(letters)      

print("just les letters : ",res)