"""

Ready

1=no

2=20+ male

3=19-15 male

4=14-9 male

5=8- male

6=20+ female

7=19-15 female

8=14-9 female

9=8- female

"""
"""

16 hours awake

"""

def on_pin_pressed_p0():
    pass
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

"""

1 = Male

2 = Female

"""
Water_Wait = 0
Age = 0
Gender = 0
Ready = 1
basic.show_string("A = Male B=Female")
while Gender == 0:
    if input.button_is_pressed(Button.A):
        Gender = 1
    if input.button_is_pressed(Button.B):
        Gender = 2
if Gender == 1 or Gender == 2:
    for index in range(1):
        basic.show_string("Enter AGE. A=+ B=- A+B TO SUBMIT")

def on_forever():
    global Age
    if Gender == 1 or Gender == 2:
        if not (input.button_is_pressed(Button.AB)):
            if input.button_is_pressed(Button.A):
                basic.clear_screen()
                Age += 1
                basic.show_string("" + str((Age)))
            if input.button_is_pressed(Button.B):
                basic.clear_screen()
                Age += -1
                basic.show_string("" + str((Age)))
basic.forever(on_forever)

def on_forever2():
    global Water_Wait
    if input.temperature() >= 37:
        Water_Wait = 0
    else:
        Water_Wait = 0
basic.forever(on_forever2)

def on_forever3():
    global Ready
    if Gender == 1 or Gender == 2:
        if input.button_is_pressed(Button.AB):
            if Age >= 20 and Gender == 1:
                Ready = 2
                basic.show_string("Age Set")
            if Age <= 19 and Gender == 1:
                if Age >= 15:
                    Ready = 3
                    basic.show_string("Age Set")
                if Age <= 14 and Gender == 1:
                    if Age >= 9:
                        Ready = 4
                        basic.show_string("Age Set")
                if Age <= 8 and Gender == 1:
                    Ready = 5
                    basic.show_string("Age Set")
            if Age >= 20 and Gender == 2:
                Ready = 6
                basic.show_string("Age Set")
            if Age <= 19 and Gender == 2:
                if Age >= 15:
                    Ready = 7
                    basic.show_string("Age Set")
                if Age <= 14 and Gender == 2:
                    if Age >= 9:
                        Ready = 8
                        basic.show_string("Age Set")
                if Age <= 8 and Gender == 2:
                    Ready = 9
                    basic.show_string("Age Set")
basic.forever(on_forever3)

def on_forever4():
    if Ready == 2:
        for index2 in range(1080):
            basic.pause(5000)
        basic.show_string("Drink 1 cup of water")
    if Ready == 3:
        for index3 in range(1260):
            basic.pause(5000)
        basic.show_string("Drink 1 cup of water")
    if Ready == 4:
        for index4 in range(1440):
            basic.pause(5000)
        basic.show_string("Drink 1 cup of water")
    if Ready == 5:
        for index5 in range(3600):
            basic.pause(5000)
        basic.show_string("Drink 1 cup of water")
    if Ready == 6:
        for index6 in range(1440):
            basic.pause(5000)
        basic.show_string("Drink 1 cup of water")
    if Ready == 7:
        for index7 in range(1620):
            basic.pause(5000)
        basic.show_string("Drink 1 cup of water")
    if Ready == 8:
        for index8 in range(2160):
            basic.pause(5000)
        basic.show_string("Drink 1 cup of water")
    if Ready == 9:
        for index9 in range(3600):
            basic.pause(5000)
        basic.show_string("Drink 1 cup of water")
basic.forever(on_forever4)
