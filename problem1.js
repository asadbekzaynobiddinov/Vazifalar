class CaesarCipher{
    constructor(shift){
        this.shift = shift
    }

    encode(text) {
        return text
          .split('')
          .map(char => this.shiftChar(char, this.shift))
          .join('')
    }
    
    
      decode(text) {
        return text
          .split('')
          .map(char => this.shiftChar(char, -this.shift))
          .join('')
    }

    shiftChar(char, shift) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    
        if (alphabet.includes(char)) {
          let newIndex = (alphabet.indexOf(char) + shift) % alphabet.length
          if (newIndex < 0) newIndex += alphabet.length
          return alphabet[newIndex]
        }

        if (lowerAlphabet.includes(char)) {
          let newIndex = (lowerAlphabet.indexOf(char) + shift) % lowerAlphabet.length
          if (newIndex < 0) newIndex += lowerAlphabet.length
          return lowerAlphabet[newIndex]
        }
        
        return char
    }
}

const caesar = new CaesarCipher(3)
console.log(caesar.encode('Salom'))
console.log(caesar.decode('Vdrop'))
