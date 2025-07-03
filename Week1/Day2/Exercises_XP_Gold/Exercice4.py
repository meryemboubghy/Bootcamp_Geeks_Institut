import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    count = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1
        if dice1 == dice2:
            return count

def main():
    results = []
    total_throws = 0
    
    for _ in range(100):
        throws = throw_until_doubles()
        results.append(throws)
        total_throws += throws
    
    average = total_throws / 100
    
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average:.2f}")

if __name__ == "__main__":
    main()