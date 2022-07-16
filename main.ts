basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    dht11_dht22.selectTempType(tempType.celsius)
    basic.showString("T:" + dht11_dht22.readData(dataType.temperature))
    basic.pause(100)
    basic.clearScreen()
    basic.showString("H:" + dht11_dht22.readData(dataType.humidity))
    basic.pause(100)
    basic.clearScreen()
})
