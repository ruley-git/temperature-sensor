let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.clear()
let TempCorrection = 2
loops.everyInterval(300000, function () {
    strip.clear()
    strip.setBrightness(10)
    if (input.temperature() - 2 >= 6) {
        strip.setPixelColor(0, neopixel.rgb(75, 0, 130))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 8) {
        strip.setPixelColor(1, neopixel.rgb(186, 85, 211))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 10) {
        strip.setPixelColor(2, neopixel.rgb(221, 160, 221))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 12) {
        strip.setPixelColor(3, neopixel.rgb(123, 104, 238))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 14) {
        strip.setPixelColor(4, neopixel.rgb(65, 105, 225))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 16) {
        strip.setPixelColor(5, neopixel.rgb(100, 149, 237))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 18) {
        strip.setPixelColor(6, neopixel.rgb(32, 178, 170))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 20) {
        strip.setPixelColor(7, neopixel.rgb(124, 255, 0))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 22) {
        strip.setPixelColor(8, neopixel.rgb(255, 255, 0))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 24) {
        strip.setPixelColor(8, neopixel.rgb(240, 230, 140))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 26) {
        strip.setPixelColor(8, neopixel.rgb(250, 160, 122))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 28) {
        strip.setPixelColor(8, neopixel.rgb(205, 92, 92))
        strip.show()
    }
    if (input.temperature() - TempCorrection >= 30) {
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
})
