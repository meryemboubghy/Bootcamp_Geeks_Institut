ar_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

manufacturers = [m.strip() for m in car_string.split(",")]

print(f"There are {len(manufacturers)} manufacturers in the list.")

print("\nManufacturers in reverse alphabetical order:")
print(*sorted(manufacturers, reverse=True), sep="\n- ")

count_with_o = sum(1 for m in manufacturers if 'o' in m.lower())
count_without_i = sum(1 for m in manufacturers if 'i' not in m.lower())

print(f"\nNumber of manufacturers with 'o': {count_with_o}")
print(f"Number of manufacturers without 'i': {count_without_i}")

dup_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_manufacturers = sorted(list(set(dup_list))) 
print("\nUnique manufacturers:")
print(", ".join(unique_manufacturers))
print(f"Total unique manufacturers: {len(unique_manufacturers)}")

print("\nManufacturers with reversed names (A-Z order):")
print(*[name[::-1] for name in sorted(unique_manufacturers)], sep="\n- ")