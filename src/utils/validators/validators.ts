export const requiredField = (value: string) => {
    if (value) {
        return
    }
    return 'Field is required'
}

// export const maxLength30 = (value: string) => {
//     if (value && value.length > 30) {
//         return 'Max length is more than 30 symbols'
//     }
//     return
// }
export const maxLengthCreator = (maxLenght: number)=> (value: string) => {
    if (value && value.length > maxLenght) {
        return `Max length is more than ${maxLenght} symbols`
    }
    return
}

export const minLength = (value: string)=> {
    if (value.length) return
    return "Enter your text"
}