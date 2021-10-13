basic.showIcon(IconNames.Happy)
let electrical_level = 1
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        if (electrical_level) {
            electrical_level = 0
            pins.digitalWritePin(DigitalPin.P2, 0)
        } else {
            electrical_level = 1
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
    }
    basic.pause(1000)
})
