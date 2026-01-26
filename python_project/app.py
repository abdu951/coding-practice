import random


""""
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
        print('Please enter a valid input.')  



 # dice rolling game   
    while True:
    choice = input('Roll the dice? (y/n): ').lower()
    if choice == 'y':
        die1 = random.randint(1, 6)
        die2 = random.randint(1, 6)
        print(f'({die1}, {die2})')
    elif choice == 'n':
        print('Thanks for playing!')
        break
    else:
        print('Invalid choice!')    

        

# rock, paper, scissors game
emojis = {'p': '📄', 's': '✂', 'r': '🌑'}  # this are python dictionary method.
choices = ('r', 'p', 's')

while True:
    user_choice = input('rock, paper, or scissors? (r/p/s): ').lower()

    if user_choice not in choices:
        print('invalid choice!')
        continue

    computer_choice = random.choice(choices)

    print(f'you choose: {emojis[user_choice]}')
    print(f'computer choose: {emojis[computer_choice]}')

    if user_choice == computer_choice:
        print('Tie!')
    elif (
         (user_choice == 'r' and computer_choice == 's') or
         (user_choice == 's' and computer_choice == 'p') or
         (user_choice == 'p' and computer_choice == 'r')
    ):
        print('you win!')
    else:
        print('you lose!')

    should_continue = input('do you want to continue? (y/n): ').lower()
    if should_continue == 'n':
        print('Thanks for playing!')
        break   """
# USING DRY PRINCIPLE which menas don't repeat yourself so declare the variables as constants and use them every where in the program
ROCK = 'r'
PAPER = 'p'
SCISSORS = 's'

# this are python dictionary method.
emojis = {PAPER: '📄', SCISSORS: '✂', ROCK: '🌑'}
choices = tuple(emojis.keys())


def get_user_choice():
    while True:
        user_choice = input('rock, paper, or scissors? (r/p/s): ').lower()

        if user_choice in choices:
            return user_choice
        else:
            print('invalid choice!')


def display_choices(user_choice, computer_choice):
    print(f'you choose: {emojis[user_choice]}')
    print(f'computer choose: {emojis[computer_choice]}')


def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        print('Tie!')
    elif (
        (user_choice == ROCK and computer_choice == SCISSORS) or
        (user_choice == SCISSORS and computer_choice == PAPER) or
        (user_choice == PAPER and computer_choice == ROCK)
    ):
        print('you win!')
    else:
        print('you lose!')


def play_game():
    while True:
        user_choice = get_user_choice()

        computer_choice = random.choice(choices)

        display_choices(user_choice, computer_choice)

        determine_winner(user_choice, computer_choice)

        should_continue = input('do you want to continue? (y/n): ').lower()
        if should_continue == 'n':
            print('Thanks for playing!')
            break


play_game()
