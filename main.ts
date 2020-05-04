radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Duck)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("Duck")
})
