// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

function polybius(input, encode = true) {
  if (encode === false){
        const check = input.replace(" ", "")
        if (!(check.length % 2 == 0)) return false
    }
    let alphabet = [
        ['a', 'b', 'c', 'd', 'e'],
        ['f', 'g', 'h', '(i/j)', 'k'],
        ['l', 'm', 'n', 'o', 'p'],
        ['q', 'r', 's', 't', 'u'],
        ['v', 'w', 'x', 'y', 'z']
    ]
    let message = []
     
    if (encode === true){
    let inputSplit = input.toLowerCase().split("")
    inputSplit.forEach(letter => {
      if ((/[a-z]/).test(letter)){
        for (let i = 0; i < alphabet.length; i++){
                for (let j = 0; j < alphabet[i].length; j++){
                    if (alphabet[i][j].includes(letter)){
                        message.push(j+1)
                        message.push(i+1)
                    }
                }
            }
        }
      else message.push(letter)
    })
    message = message.join("")
    }

    if (encode === false){
      let words = input.toLowerCase().split(" ") 
      words.forEach(word => {
        let phrase = []
        for (let i = 0; i < word.length; i += 2){
            let num1 = word[i]
            let num2 = word[i + 1]
            phrase.push(alphabet[num2-1][num1-1])
        }
        message.push(phrase.join(""))
      })
      message = message.join(" ")
    }

    return message
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
