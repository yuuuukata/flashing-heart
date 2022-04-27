basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    while (input.lightLevel() == 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . # . #
            # . # . #
            # . # . #
            `)
        music.playMelody("A G A - A G A - ", 220)
    }
})
