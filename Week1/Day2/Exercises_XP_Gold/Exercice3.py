names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Enter your name: ")

if user_name in names:
    print(f"The first occurrence of {user_name} is at index {names.index(user_name)}")
else:
    print(f"{user_name} is not in the list.")