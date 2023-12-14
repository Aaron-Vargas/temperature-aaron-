let cuerrent_temperature = 0
basic.forever(function () {
    cuerrent_temperature = input.temperature()
    basic.showNumber(cuerrent_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
