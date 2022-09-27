def on_button_pressed_a():
    Kitronik_STOPbit.traffic_light_led(Kitronik_STOPbit.LightColours.GREEN,
        Kitronik_STOPbit.DisplayLights.ON)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Kitronik_STOPbit.traffic_light_led(Kitronik_STOPbit.LightColours.GREEN,
        Kitronik_STOPbit.DisplayLights.OFF)
    Kitronik_STOPbit.traffic_light_led(Kitronik_STOPbit.LightColours.RED,
        Kitronik_STOPbit.DisplayLights.ON)
input.on_button_pressed(Button.B, on_button_pressed_b)
