radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 93847) {
        radio.sendNumber(98765)
        Ampel = 1
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        if (receivedNumber == 66453) {
            radio.sendNumber(46123)
            Ampel = 2
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (Ampel == 2) {
        Ampel = 1
        radio.sendNumber(98765)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Ampel == 1) {
        radio.sendNumber(46123)
        Ampel = 2
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
let Ampel = 0
radio.setGroup(187)
radio.sendNumber(46123)
Ampel = 2
pins.digitalWritePin(DigitalPin.P2, 0)
