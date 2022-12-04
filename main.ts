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
