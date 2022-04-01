const expect = require("chai").expect
const {polybius} = require("../src/polybius.js")

describe("polybius function", () => {
  it("should return a number double the length of the input word", () => {
    const actual = polybius("thinkful")
    let expected = '4432423352125413'
    expect(actual).to.eql(expected)
  })
  
  it("should maintain the space that was in the input", () => {
     const actual = polybius("Hello world")
     const expected = "3251131343 2543241341"
     expect(actual).to.eql(expected)
     })
  
  it("should return decoded message", () => {
    const actual = polybius("3251131343 2543241341", false)
    const expected = "hello world"
    expect(actual).to.eql(expected)
  })
  
  it("should return false if there is an odd number of numbers to decode", () => {
    const actual = polybius("44324233521254134", false)
    expect(actual).to.be.false
  })
})
