const string = 'hello world'

function stringReverse(string){
    let newString = ''
    for (let i = string.length-1; i >= 0; i--){
        newString += string[i]
    }

    return newString
}

console.log(stringReverse(string))
