input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("A G A - A G A - ", 220)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        # . # . #
        # . # . #
        `)
})
