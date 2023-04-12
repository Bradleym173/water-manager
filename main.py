"""

1 = Male

2 = Female

"""
Water_Wait = 0
Age = 0
Gender = 0
basic.show_string("A = Male B=Female")
while Gender == 0:
    if input.button_is_pressed(Button.A):
        Gender = 1
    if input.button_is_pressed(Button.B):
        Gender = 2
if Gender == 1:
    basic.show_string("Enter AGE")
    while input.button_is_pressed(Button.A):
        Age += 1
        basic.show_string("" + str((Age)))
    while input.button_is_pressed(Button.B):
        Age += -1
        basic.show_string("" + str((Age)))
    while input.button_is_pressed(Button.AB):
        basic.clear_screen()
        if Age <= 70 and Gender == 1:
            basic.show_leds("""
                . . . . .
                                . . . . #
                                # . . # .
                                . # # . .
                                . . . . .
            """)
            if Age <= 19 and Gender == 1:
                basic.show_leds("""
                    . # . . .
                                        . # . . #
                                        # . # # .
                                        . # # . .
                                        . . . . .
                """)
                if Age <= 14 and Gender == 1:
                    basic.show_leds("""
                        . . . . #
                                                . . . . #
                                                # . . # .
                                                . # # # .
                                                . . . . #
                    """)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)

def on_forever():
    global Water_Wait
    if input.temperature() >= 37:
        Water_Wait = 0
    else:
        Water_Wait = 0
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)

"""

Needs Work

"""

def on_forever3():
    pass
basic.forever(on_forever3)
