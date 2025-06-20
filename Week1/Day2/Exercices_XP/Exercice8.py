taps=[]

while True:
  tap=input("Enter pizza or tap quit pour quit the programme : ")
  if tap.lower()=="quit":
    break
  taps.append(tap)
  print(f"Adding {tap}  to your pizza.")

print("GoodBy!")
base_price =0 
tap_price =2.50
totale =base_price+ (len(taps)*tap_price)
print("\n all the toppings :{taps} , and total cost of the pizza : {totale} ")
