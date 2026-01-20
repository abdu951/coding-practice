# fundamentals of python
"""import math
print('hello world')
print('*' * 10)
2 + 3
student = ['zhangsan', 'lisi', 'wangwu']
if 'zhangsan' in student:
    print('yes')
print(student)


# strings and some properties like length, index slicing
course = "python programming"
length = len(course)
print(length)
print(course[0])
print(course[-1])
print(course[0:3])
print(course[:3])
print(course[3:])
print(course[:])

# escape sequence in python
print('hello \"world')
print('hello \'world')
print('hello \\world')
print('hello \nworld')

# formated strings in python
first = 'zhangsan'
last = 'lisi'
full = f'hello {first} {last}'
print(full)

# string methods in python
course = "python programming"
print(course.upper())
print(course.lower())
print(course.title())
print(course.find('pr'))
print(course.replace('p', 'j'))
print('python' in course)
print('python' not in course)

# numbers in python

# three types of numbers int, float, complex
z = 10  # int
z = 10.5  # float
z = 10+5j  # complex

# basic math operations
x = 10
y = 3
print(x + y)
print(x - y)
print(x * y)
print(x / y)
print(x // y)
print(x % y)
print(x ** y)

# augmented assignment
x = x+y  # x += y are equal

# working with numbers

print(math.ceil(2.4))  # which means the smallest integer >= 2.4
print(math.floor(2.4))
# abc: means Absolute value = distance from zero, it remove the negative sign because disance always posetive
print(abs(-2.4))
print(pow(2, 3))
print(max(2, 3))
print(min(2, 3))
print(round(2.4))

# type conversion in python
x = 10
y = 3
print(x + y)
print(str(x) + str(y))
print(int('10') + int('3'))

# input in python
name = input('enter your name: ')
print('hello ' + name)

# falsy value in python
# False, None, 0, "",
bool(0)
bool(None)
bool('')
# truthy value in python
# True, "0", " "

# fundamentals of programming

# comparison operators
a = 10
b = 20
print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)

# another comparison operators
print("bag" > "apple")  # True: because Strings are compared alphabetically

# True: the numeric representation of "b" is 98, the numeric representation of "B" is 66
print("bag" > "BAG")


# conditional statements in python: conditional statements are indentation or spaces sensetive
temperature = 35

if temperature > 30:
    print("it's hot")
    print("drink water")
elif temperature > 20:
    print("it's nice")
else:
    print("it's cold")
print("done")

# ternery operator in python: i will come back to this how to add elif statement
temperature = 30
message = "it's hot" if temperature > 30 else "it's moderate" if temperature > 20 else "it's not hot"
print(message)

# short-circuit evaluation: in python logical operators are short-circuit evaluated which means if the first operand is false then the second operand will not be evaluated
# logical operators in python
high_income = True
good_credit = True
student = False

if high_income and good_credit and not student:
    print("eligible")
else:
    print("not eligible")

if (high_income or good_credit) and student:
    print("eligible")
else:
    print("not eligible")

if not student:
    print("eligible")
else:
    print("not eligible")

# chaining comparison operators in python
# age should be between 18 and 65
age = 22
if 18 <= age < 65:
    print("eligible")
else:
    print("not eligible")

# quiz question

if 10 == "10":
    print('a')
elif "bag" > "apple" and "bag" > "cat":
    print('b')
else:
    print('c')

# for loop in python
for i in range(1, 10, 2):
    print("attempt", i, i * ".")

# for...else loop in python
successful = True
for i in range(3):
    print("attempt")
    if successful:
        print("successful")
        break
else:
    print("failed after 3 attempts")

# nested loop in python
for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)

# iterables in python
for x in [1, 2, 3, 4, 5]:
    print(x)

for item in 'shopning_list':
    print(item)

# while loop in python
i = 1
while i <= 10:
    print(i)
    i += 1

# infinite loop in python: is running until the condition is false
i = 1
while True:
    print(i)
    i += 1
    if i > 10:
        break
# quiz question: show the even numbers from 1 to 10
i = 2
while True:
    print(i)
    i += 2
    if i >= 10:
        print("we have 4 even numbers")
        break

# another way to show the even numbers from 1 to 10
count = 0
for number in range(1, 10):
    if number % 2 == 0:
        count += 1
        print(number)
print(f"we have {count} even numbers")

# in python all functions return none value by default
# functions in python


def greet():
    print("hello")
    print("how are you")
    print("i am fine")


greet()

# arguments in python


def greet(first_name, last_name):
    print(f"hello {first_name} {last_name}")
    print("how are you")
    print("i am fine")


greet("abdu", "mame")
greet("seya", "mame")

# types of functions in python: in programming we have two types of functions 1, perform a task 2, return a value

# perform a task function


def greet(name):
    print(f"hello {name}")


greet("abdu")

# return a value function


def square(number):
    return number * number


result = square(3)
print(result)

# keyword arguments in python


def increment(number, by):
    return number + by


print(increment(number=3, by=2))  # this is keyword arguments

# default arguments in python: all the optional arguments should be at the end


def increment(number=2, by=1):  # this is default arguments
    return number + by


print(increment(3, 2))

# args, wait, in this num times two is the first argument and through number the value is changed by the first result


def multiply(*number):  # *number: means Accept any number of arguments and Store them as a tuple like this(2, 3, 4, 5)
    total = 2
    for num in number:
        total *= num
    return total


print(multiply(2, 3, 4, 5))  """
