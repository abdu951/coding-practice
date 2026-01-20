# dice rolling game
import random

"""while True:
    choice = input('Roll the dice? (y/n): ').lower()
    if choice == 'y':
        die1 = random.randint(1, 6)
        die2 = random.randint(1, 6)
        print(f'({die1}, {die2})')
    elif choice == 'n':
        print('Thanks for playing!')
        break
    else:
        print('Invalid choice!') """


# number guessing game
secret_number = random.randint(1, 100)

while True:
    try:

        guess = int(input('guess the number between 1 and 100: '))
        if guess < secret_number and guess > 1:
            print('Your guess is too low.')
        elif guess > secret_number and guess < 100:
            print('Your guess is too high.')
        elif guess < 1 or guess > 100:
            print('Please enter a number between 1 and 100.')
        else:
            print('Congratulations! You guessed the number.')
            break
    except ValueError:
        print('Please enter a valid number.')
