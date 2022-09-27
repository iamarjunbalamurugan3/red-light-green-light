input.onButtonPressed(Button.A, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(100)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    music.playMelody("G G G G G G G G ", 500)
    music.playMelody("G G G G G G G G ", 500)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(100)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 500)
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 500)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    music.playMelody("B A G A G F A C5 ", 159)
})
basic.forever(function () {
    music.setVolume(255)
})
