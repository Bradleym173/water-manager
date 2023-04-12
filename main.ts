/**
 * Needs Work
 */
/**
 * 1 = Male
 * 
 * 2 = Female
 */
let Age = 0
let Water_Wait = 0
let Gender = 0
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
    if (Gender == 1 || Gender == 2) {
        if (input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            Age += 1
            basic.showString("" + (Age))
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
            Age += -1
            basic.showString("" + (Age))
        }
        while (input.buttonIsPressed(Button.AB)) {
            basic.clearScreen()
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
        }
    }
})
basic.forever(function () {
	
})
