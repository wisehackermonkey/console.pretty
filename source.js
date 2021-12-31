
const cssColors = require("./test/colors.json")

const prettyCore = (...args) => {
  let optionsArgumentIndex = [...args].length
  const options = [...args][optionsArgumentIndex - 1] ?? {}
  const firstArg = [...args][0] ?? {}



  if (args.length < 2) {
    return new Error("prettyCore requires at least two arguments")
  }


  if (typeof args[0] === "string" && typeof args[1] === "string" && typeof args[2] === "object") {
    let colorArgumentIndex = 1
    let optionsArgumentIndex = 2
    return [`%c${firstArg}`, `${optionsObjectToCSS(options)}`]
  }

  //check if first argument is a string and the second is a valid css color and the third is an valid css color
  if (typeof args[0] === "string" && isValidCssColor(args[1]) && isValidCssColor(args[2])) {
    let colorArgumentIndex = 1
    let backgroundColorArgumentIndex = 2
    return [`%c${firstArg}`, `color: ${args[colorArgumentIndex]};background: ${args[backgroundColorArgumentIndex]};`]
  }
  if (typeof args[0] === "string" && typeof args[1] === "string" && isValidCssColor(args[1])) {
    let colorArgumentIndex = 1
    return [`%c${firstArg}`, `color: ${args[1]};`]
  }
  if (typeof args[0] === "string" && typeof args[1] === "object") {

    let extraArgs = [...args].slice(1, -1)
    return [`%c${firstArg}`, optionsObjectToCSS(options), ...extraArgs]
  }
}


const optionsObjectToCSS = (options) => {
  const styling = {
    "default": `background: white;color: green;box-shadow: inset  5em 1em gold;border: ${options?.border ?? "4"}mm ridge rgba(170, 50, 220, .6);`,
    "border": `box-shadow: inset  5em 1em gold;border:  ${options?.border ?? "4"}mm ridge rgba(170, 50, 220, .6);`,
    "fontSize": `font-size: ${options.fontSize ?? "25px"};`,
    "image": `font-size: ${options.fontSize ?? "100px"};  background: url('${options?.image}')  no-repeat center; background-size: 100vh auto; padding:500px");`
  }
  if (options === {}) {
    return ""
  }
  let style = ""
  for (let key in options) {
    if (key === "border" && options.border === false) {
      continue;
    }
    if (Object.keys(styling).includes(key)) {
      style += styling[key]
      continue
    }
    if (options.hasOwnProperty(key)) {
      style += `${convertCammelCaseToDash(key)}: ${options[key]};`
    }

  }
  return style
}
// 
const convertCammelCaseToDash = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// checks to see if a string is a valid css color
// https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
const isValidCssColor = (color) => {
  if (typeof color !== "string") {
    return false
  }
  if (cssColors.names.includes(color)) {
    return true
  }
  if (color.length !== 7) {
    return false
  }
  if (color[0] !== "#") {
    return false
  }
  if (color.match(/^#[0-9a-fA-F]{6}$/)) {
    return true
  }

  return false
}

const createLogger = (message, color, background) => console.pretty(message, { color: color, background: background })
module.exports = {

  prettyCore: prettyCore,
  isValidCssColor: isValidCssColor,
  optionsObjectToCSS: optionsObjectToCSS,
  convertCammelCaseToDash: convertCammelCaseToDash,
  setup: (con) => {

    con.pretty = (...args) => {
      let results = prettyCore(...args)
      console.log(...results)
    }
    con.blue = (...message) => con.pretty(...message, { background: "#1E88E5", color: "#90CAF9" })
    con.brown = (...message) => con.pretty(...message, { background: "#6D4C41", color: "#D7CCC8" })
    con.gray = (...message) => con.pretty(...message, { background: "#212121", color: "#BDBDBD" })
    con.green = (...message) => con.pretty(...message, { background: "#388E3C", color: "#A5D6A7" })
    con.red = (...message) => con.pretty(...message, { background: "#E53935", color: "#EF9A9A" })
    con.orange = (...message) => con.pretty(...message, { background: "#F4511E", color: "#FFAB91" })
    con.purple = (...message) => con.pretty(...message, { background: "#8E24AA", color: "#E1BEE7" })
    con.yellow = (...message) => con.pretty(...message, { background: "#FFD600", color: "#FFF59D" })

  }
};
