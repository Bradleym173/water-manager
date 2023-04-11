/**
 * 1 = Male
 * 
 * 2 = Female
 */
let Age = 0
let Water_Wait = 0
let Gender = 0
basic.showString("A = Male B=Female")
while (Gender == 0) {
    if (input.buttonIsPressed(Button.A)) {
        Gender = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        Gender = 2
    }
}
basic.forever(function () {
    if (input.temperature() >= 37) {
        Water_Wait = 0
    } else {
        Water_Wait = 0
    }
})
basic.forever(function () {
    if (Age <= 70 && Gender == 1) {
        basic.showLeds(`
            . . . . .
            . . . . #
            # . . # .
            . # # . .
            . . . . .
            `)
        if (Age <= 19 && Gender == 1) {
            basic.showLeds(`
                . # . . .
                . # . . #
                # . # # .
                . # # . .
                . . . . .
                `)
            if (Age <= 14 && Gender == 1) {
                basic.showLeds(`
                    . . . . #
                    . . . . #
                    # . . # .
                    . # # # .
                    . . . . #
                    `)
            }
        }
    }
})
/**
 * Needs Work
 */
basic.forever(function () {
    if (Gender == 1) {
        basic.showString("Enter AGE")
        while (input.buttonIsPressed(Button.A)) {
            Age += 1
            basic.showString("" + (Age))
        }
        while (input.buttonIsPressed(Button.B)) {
            Age += -1
            basic.showString("" + (Age))
        }
        while (input.buttonIsPressed(Button.AB)) {
            basic.clearScreen()
        }
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
    }
})
