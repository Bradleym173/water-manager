/**
 * 1 = Male
 * 
 * 2 = Female
 */
/**
 * Ready
 * 
 * 1=no
 * 
 * 2=20+ male
 * 
 * 3=19-15 male
 * 
 * 4=14-9 male
 * 
 * 5=8- male
 * 
 * 6=20+ female
 * 
 * 7=19-15 female
 * 
 * 8=14-9 female
 * 
 * 9=8- female
 */
/**
 * 16 hours awake
 */
input.onPinPressed(TouchPin.P0, function () {
	
})
let Water_Wait = 0
let Age = 0
let Gender = 0
let Ready = 1
basic.showString("A = Male B=Female")
while (Gender == 0) {
    if (input.buttonIsPressed(Button.A)) {
        Gender = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        Gender = 2
    }
}
if (Gender == 1 || Gender == 2) {
    for (let index = 0; index < 1; index++) {
        basic.showString("Enter AGE. A=+ B=- A+B TO SUBMIT")
    }
}
basic.forever(function () {
    if (Gender == 1 || Gender == 2) {
        if (!(input.buttonIsPressed(Button.AB))) {
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
        }
    }
})
basic.forever(function () {
    if (input.temperature() >= 37) {
        Water_Wait = 0
    } else {
        Water_Wait = 0
    }
})
basic.forever(function () {
    if (Gender == 1 || Gender == 2) {
        if (input.buttonIsPressed(Button.AB)) {
            if (Age >= 20 && Gender == 1) {
                Ready = 2
                basic.showString("Age Set")
            }
            if (Age <= 19 && Gender == 1) {
                if (Age >= 15) {
                    Ready = 3
                    basic.showString("Age Set")
                }
                if (Age <= 14 && Gender == 1) {
                    if (Age >= 9) {
                        Ready = 4
                        basic.showString("Age Set")
                    }
                }
                if (Age <= 8 && Gender == 1) {
                    Ready = 5
                    basic.showString("Age Set")
                }
            }
            if (Age >= 20 && Gender == 2) {
                Ready = 6
                basic.showString("Age Set")
            }
            if (Age <= 19 && Gender == 2) {
                if (Age >= 15) {
                    Ready = 7
                    basic.showString("Age Set")
                }
                if (Age <= 14 && Gender == 2) {
                    if (Age >= 9) {
                        Ready = 8
                        basic.showString("Age Set")
                    }
                }
                if (Age <= 8 && Gender == 2) {
                    Ready = 9
                    basic.showString("Age Set")
                }
            }
        }
    }
})
basic.forever(function () {
    if (Ready == 2) {
        for (let index = 0; index < 1080; index++) {
            basic.pause(5000)
        }
        basic.showString("Drink 1 cup of water")
    }
    if (Ready == 3) {
        for (let index = 0; index < 1260; index++) {
            basic.pause(5000)
        }
        basic.showString("Drink 1 cup of water")
    }
    if (Ready == 4) {
        for (let index = 0; index < 1440; index++) {
            basic.pause(5000)
        }
        basic.showString("Drink 1 cup of water")
    }
    if (Ready == 5) {
        for (let index = 0; index < 3600; index++) {
            basic.pause(5000)
        }
        basic.showString("Drink 1 cup of water")
    }
    if (Ready == 6) {
        for (let index = 0; index < 1440; index++) {
            basic.pause(5000)
        }
        basic.showString("Drink 1 cup of water")
    }
    if (Ready == 7) {
        for (let index = 0; index < 1620; index++) {
            basic.pause(5000)
        }
        basic.showString("Drink 1 cup of water")
    }
    if (Ready == 8) {
        for (let index = 0; index < 2160; index++) {
            basic.pause(5000)
        }
        basic.showString("Drink 1 cup of water")
    }
    if (Ready == 9) {
        for (let index = 0; index < 3600; index++) {
            basic.pause(5000)
        }
        basic.showString("Drink 1 cup of water")
    }
})
