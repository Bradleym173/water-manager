basic.forever(function () {
    while (input.temperature() >= 15) {
        basic.showLeds(`
            . . . . #
            # # # # #
            . . . # .
            # . . # .
            . # . # .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
