# fundamentals of python
"""print('hello world')
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
import math

print(math.ceil(2.4)) # which means the smallest integer >= 2.4
print(math.floor(2.4))
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
print("bag" > "apple")  # True: i will come back to this
print("bag" > "BAG")  # True: the numeric representation of "b" is 98, the numeric representation of "B" is 66
"""
