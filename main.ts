input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    servos.P1.setAngle(0)
    basic.pause(500)
    basic.showNumber(90)
    servos.P1.setAngle(90)
    basic.pause(100)
    basic.showNumber(180)
    servos.P1.setAngle(180)
    basic.pause(100)
    servos.P0.stop()
})
65
basic.showIcon(IconNames.Heart)
