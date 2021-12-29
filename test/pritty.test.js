const { prettyCore,isValidCssColor } = require("../source")

// prettyCore is a function that takes a message and an optional options object
// and returns an array of two or more arguments that can be passed to console.log
//
// The first argument is the message
// The second argument is an object with the following properties
//   color: a valid CSS color
//   background: a valid CSS color
//   borderSize: a number
//   image: a valid URL
//   fontSize: a number
//   border: a boolean
//
// The third and subsequent arguments are the arguments that will be passed to console.log
//
// If the second argument is an object, the first argument is the message
// If the second argument is a string, the first argument is the message and the second argument is the color


// isValidCssColor accepts a string and returns true if it is a valid css color
test("isValidCssColor accepts a string and returns true if it is a valid css color", () => {
    expect(isValidCssColor("#FF0000")).toStrictEqual(true)
    expect(isValidCssColor("#F00")).toStrictEqual(true)  // short hex
    // expect(isValidCssColor("#FFF")).toStrictEqual(true) currently not supported
    expect(isValidCssColor("#FFFFFF")).toStrictEqual(true)
    expect(isValidCssColor("#FFFFFFF")).toStrictEqual(false)
    expect(isValidCssColor("red")).toStrictEqual(true)
})

// prettyCore is a function that takes a manditory message argument and the second argument to be a css color object
test("prettyCore is a function that takes a message and an optional options object and returns an array of two or more arguments that can be passed to console.log", () => {
    let color = "red"
    let messge = "hello"
    let expected = [`%c${color}`, `color: ${color};`]  
    let actual = prettyCore(messge, color)
    expect(actual).toEqual(expected)
})
test("prettyCore accepts a non empty options object, with color attribute", () => {
    //assert arguments to console.log are passed through
    const message = "hello"
    const color = "red"
    const background = "yellow"
    const borderSize = "4"
    const fontSize = "25px"
    const image = "https://i.imgur.com/XqY6QQl.png"
    const options = {
        color: color,
        background: background,
        borderSize: borderSize,
        fontSize: fontSize,
        image: image
    }
    const expected = ["%chello", "color:red;background: yellow; font-size: 25px;  font-size: 25px;  background: url('https://i.imgur.com/XqY6QQl.png')  no-repeat center; background-size: 100vh auto; padding:500px\");"]
    const actual = prettyCore(message, options)
    expect(actual).toStrictEqual(expected)
})

// prettyCore accepts color attribute for first argument, and a non empty options object for second argument
test("prettyCore accepts color attribute for first argument, and a non empty options object for second argument", () => {
    //assert arguments to console.log are passed through
    const color = "red"
    const fontSize = "25px"
    const options = {
        color: color,
        fontSize: fontSize
    }
    const expected = ["%chello", "color:red; font-size: 25px;"]
    const actual = prettyCore("hello", "red", options)
    expect(actual).toStrictEqual(expected)
})
