// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false

    let message = []
    const words = input.toLowerCase().split(" ")
    const standardAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const letters = alphabet.split("") 
    const newAlphabet = {}
    for (let i = 0; i < standardAlphabet.length; i++){
      if (encode === true){
        newAlphabet[standardAlphabet[i]] = letters[i]
      }
      if (encode === false){
        newAlphabet[letters[i]] = standardAlphabet[i]
      }
    }

    for (let i = 0; i < letters.length; i++) {
      const letterCheck = letters.filter(char => char === letters[i])
      if (letterCheck.length > 1) return false
    }

    words.forEach(word => {
      const wordAssemble = []
      const letter = word.split("") 
      letter.forEach(character => {
        wordAssemble.push(newAlphabet[character])
      })
      message.push(wordAssemble.join(""))
    })
  
    return message.join(" ")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
