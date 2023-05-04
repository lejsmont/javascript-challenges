function panic(text) {
    
    if (text.length <= 0) return

    return text.toUpperCase().split(' ').join(' 😱 ') + '!'    

}

console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))