
const cssColors = require("./test/colors.json")

const prettyCore = (...args) => {
  let optionsArgumentIndex = [...args].length
  const options = [...args][optionsArgumentIndex - 1] ?? {}
  const firstArg = [...args][0] ?? {}

  if(args.length === 0) {
    throw new Error("prettyCore requires at least one argument")
  }
  if(args.length === 1) {
    throw new Error("prettyCore requires at least two arguments")
  }
  if(args.length === 2) {
    if(typeof args[0] === "string" && typeof args[1] === "object") {
      optionsArgumentIndex = 1
    } else {
      throw new Error("prettyCore requires at least two arguments")
    }
  }
  if(args.length === 2) {
    if(typeof args[0] === "string" && typeof args[1] === "string" &&  isValidCssColor( args[1])) {
      let colorArgumentIndex = 1
      return [`%c${firstArg}`, {color:args[colorArgumentIndex]}]
    } else {
      throw new Error("prettyCore requires at least two arguments, prittyCore(message, color) or prittyCore(message, options)")
    }
  }
  

  const styling = {
    "default": `background: white; color:green; box-shadow: inset  5em 1em gold;border:  ${options?.borderSize ?? "4"}mm ridge rgba(170, 50, 220, .6);`,
    "border": `box-shadow: inset  5em 1em gold;border:  ${options?.borderSize ?? "4"}mm ridge rgba(170, 50, 220, .6);`,
    "color": `color:${options?.color};`,
    "background": `background: ${options?.background};`,
    "fontSize": ` font-size: ${options.fontSize ?? "25px"}; `,
    "image": ` font-size: ${options.fontSize ?? "100px"};  background: url('${options?.image}')  no-repeat center; background-size: 100vh auto; padding:500px");`
  }
  let style = ""
  for (let key in options) {
    if (key === "border" && options.border === false) {
      continue;
    }
    if (styling.hasOwnProperty(key)) {
      style += styling[key]
    }
  }
  let extraArgs = [...args].slice(1, -1)
  return [`%c${firstArg}`, style, ...extraArgs]
}
// checks to see if a string is a valid css color
// https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
const isValidCssColor = (color) => {
  if (typeof color !== "string") {
    return false
  }
  if(cssColors.names.includes(color)) {
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

const runPrint = (...args) => console.log(...args)
const createLogger = (message, color, background) => console.pretty(message, { color: color, background: background })
module.exports = {

  blue: (...message) => console.pretty(...message, { background: "#1E88E5", color: "#90CAF9" }),// createLogger("#1E88E5", "#90CAF9"),
  brown: (...message) => console.pretty(...message, { background: "#6D4C41", color: "#D7CCC8" }),
  gray: (...message) => console.pretty(...message, { background: "#212121", color: "#BDBDBD" }),
  green: (...message) => console.pretty(...message, { background: "#388E3C", color: "#A5D6A7" }),
  red: (...message) => console.pretty(...message, { background: "#E53935", color: "#EF9A9A" }),
  orange: (...message) => console.pretty(...message, { background: "#F4511E", color: "#FFAB91" }),
  purple: (...message) => console.pretty(...message, { background: "#8E24AA", color: "#E1BEE7" }),
  yellow: (...message) => console.pretty(...message, { background: "#FFD600", color: "#FFF59D" }),
  prettyCore: prettyCore,
  isValidCssColor: isValidCssColor,
  pretty: (con) => {

    con.pretty = (...args) => runPrint(prettyCore(...args))
  },
};
