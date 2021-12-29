const { prettyCore, isValidCssColor, optionsObjectToCSS, convertCammelCaseToDash } = require("../source")

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

// convertCammelCaseToDash takes in "borderSize" and returns "border-size"
test("convertCammelCaseToDash", () => {
    expect(convertCammelCaseToDash("borderSize")).toBe("border-size")
    expect(convertCammelCaseToDash("border-size")).toBe("border-size")
    expect(convertCammelCaseToDash("")).toBe("")
    
})

// isValidCssColor accepts a string and returns true if it is a valid css color
test("isValidCssColor accepts a string and returns true if it is a valid css color", () => {
    expect(isValidCssColor("#FF0000")).toStrictEqual(true)
    // expect(isValidCssColor("#F00")).toStrictEqual(true)  //  currently not supported
    // expect(isValidCssColor("#FFF")).toStrictEqual(true) //currently not supported
    expect(isValidCssColor("#FFFFFF")).toStrictEqual(true)
    expect(isValidCssColor("#FFFFFFF")).toStrictEqual(false)
    expect(isValidCssColor("red")).toStrictEqual(true)
})

// optionsObjectToCSS accepts an options object and returns a string of CSS
test("optionsObjectToCSS accepts an options object and returns a string of CSS", () => {
    let image = "https://www.example.com/image.png"
    expect(optionsObjectToCSS({})).toStrictEqual("")
    expect(optionsObjectToCSS({ color: "red" })).toStrictEqual("color: red;")
    expect(optionsObjectToCSS({ background: "red" })).toStrictEqual("background: red;")
    expect(optionsObjectToCSS({ borderSize: "4" })).toStrictEqual("border-size: 4;")
    expect(optionsObjectToCSS({ image: image })).toStrictEqual(`font-size: 100px;  background: url('${image}')  no-repeat center; background-size: 100vh auto; padding:500px");`)
    expect(optionsObjectToCSS({ fontSize: "100px" })).toStrictEqual(`font-size: 100px;`)
    expect(optionsObjectToCSS({ border: false })).toStrictEqual("")
})
// prettyCore is a function that takes a manditory message argument and the second argument to be a css color object
test("prettyCore is a function that takes a message and valid css color argument", () => {
    let color = "red"
    let messge = "hello"
    let expected = [`%c${messge}`, `color: ${color};`]
    let actual = prettyCore(messge, color)
    expect(actual).toEqual(expected)
})
test("prettyCore accepts a non empty options object, with color attribute", () => {
    //assert arguments to console.log are passed through
    const message = "hello"
    const color = "red"
    const background = "yellow"
    const borderSize = "4mm"
    const fontSize = "25px"
    const image = "https://i.imgur.com/XqY6QQl.png"
    const options = {
        color: color,
        background: background,
        borderSize: borderSize,
        fontSize: fontSize,
        image: image
    }
    const expected = ["%chello", "color: red;background: yellow;border-size: 4mm;font-size: 25px;font-size: 25px;  background: url('https://i.imgur.com/XqY6QQl.png')  no-repeat center; background-size: 100vh auto; padding:500px\");"]
    const actual = prettyCore(message, options)
    expect(actual).toStrictEqual(expected)
})

// prettyCore accepts color attribute for first argument, and a non empty options object for second argument
test("prettyCore accepts color attribute for first argument, and a non empty options object for second argument", () => {
    //assert arguments to console.log are passed through
    const color = "blue"
    const fontSize = "25px"
    const options = {
        color: color,
        fontSize: fontSize
    }
    const expected = ["%chello", `color: ${color};font-size: ${fontSize};`]
    const actual = prettyCore("hello", color, options)
    expect(actual).toStrictEqual(expected)
})

// prettyCore accepts color attribute for first argument, and color attribute for second argument
test("prettyCore accepts color attribute for first argument, and color attribute for second argument", () => {
    //assert arguments to console.log are passed through
    const color = "blue"
    const background = "yellow"
    const expected = ["%chello", `color: ${color};background: ${background};`]
    const actual = prettyCore("hello", color, background)
    expect(actual).toStrictEqual(expected)
})