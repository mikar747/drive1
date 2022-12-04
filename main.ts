input.onButtonPressed(Button.A, function () {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 16)
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    MotorDriver.MotorStop(Motor.A)
    MotorDriver.MotorStop(Motor.B)
    basic.showIcon(IconNames.Heart)
    music.stopAllSounds()
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("G E E F D D C E ", 160)
    music.playMelody("G - G E E F D D ", 160)
    music.playMelody("C E C C - - - - ", 160)
})
input.onButtonPressed(Button.B, function () {
    MotorDriver.MotorRun(Motor.B, Dir.forward, 16)
    basic.showLeds(`
        # # # . .
        # . . # .
        # . # . .
        # . . # .
        # # # . .
        `)
})
basic.forever(function () {
	
})
