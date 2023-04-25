let a = 0
let b = 0
let tool = 0
input.onButtonPressed(Button.A, function () {
    a = randint(1, 12)
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(a * b)
})
input.onButtonPressed(Button.B, function () {
    b = randint(1, 12)
    basic.showNumber(b)
})
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
