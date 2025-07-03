birthdays = {
    "Meryem Boubghy": "1999/03/10",
    "aziza cheraqqi": "2000/04/15",
    "mery mery": "1989/10/07",
    "BOU BOU": "1888/01/08",
    "alix alix": "1912/06/23"
}

print("Welcome! You can look up the birthdays of famous scientists.")
name = input("Enter a scientist's name: ")

if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}")
else:
    print(f"Sorry, we don't have birthday information for {name}.")