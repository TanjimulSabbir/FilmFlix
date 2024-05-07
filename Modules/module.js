export const sum = (a, b) => {
    return a + b
}
export const sub = (a, b) => {
    return a - b
}
export const multiply = (a, b) => {
    return a * b
}
export const divided = (a, b) => {
    return a / b
}

const myDefault = (work = "Airbnb") => {
    return `Hello, I'm Tanjimul. I'm a software Developer. I'm currently working on ${work}`
}

export default myDefault;