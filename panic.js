function panic(text) {
    
    if (text.length <= 0) return

    upperText = text.toUpperCase()

    if (upperText.length === 1) return upperText
    
    const words = text.split(' ')

    for (let i = 0; i < words.length-1;i++) {
        words[i] = words[i] + ' 😱'
    }

    return words.join(' ')
    

}

console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))