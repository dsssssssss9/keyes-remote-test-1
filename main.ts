makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
    basic.showString("" + (makerbit.irButton()))
})
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
