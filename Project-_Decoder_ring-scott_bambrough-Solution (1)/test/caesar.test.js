// Write your tests here!
const {caesar} = require("../src/caesar.js")
const expect = require("chai").expect

describe("Caesar function", () => {
  it("Should return scrambled message", () => {
    const expected = 'wklqnixo'
    let actual = caesar("thinkful", 3, true)
    expect(actual).to.eql(expected)
  })
  it("Should return scrambled message, keeping punctuation and spacing", () => {
    const expected = "khoor zruog!!!"
    const actual = caesar("Hello World!!!", 3, true)
    expect(actual).to.eql(expected)
  })
  it("Should return false if there is no shift input", () => {
    const actual = caesar("thinkful")
    expect(actual).to.eql(false)
  })
  it("Should return false if the shift value is greater than 25", () => {
    const actual = caesar("thinful", 27)
    expect(actual).to.eql(false)
  })
  it("Should return decoded message if encode = false", () => {
    const expected = "hello world"
    const actual = caesar("khoor zruog", 3, false)
    expect(actual).to.eql(expected)
  })
})