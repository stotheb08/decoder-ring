// Write your tests here!
const expect = require("chai").expect
const {substitution} = require("../src/substitution")

describe("substitutioin function", () => {
  it("should return scrambled message", () =>{
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
    const expected = "jrufscpw"
    expect(actual).to.eql(expected)
  })
  
  it("should return scrambled message maintaining spaces", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    const expected = 'elp xhm xf mbymwwmfj dne'
    expect(actual).to.eql(expected)
  })
  
  it("should return unscrambled message", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    const expected = "thinkful"
    expect(actual).to.eql(expected)
  })
  
  it("should return scrambled message using symbols", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
    const expected = "y&ii$r&"
    expect(actual).to.eql(expected)
  })
  
  it("should return false if alphabet is too short or long", () => {
    const actual = substitution("thinkful", "short")
    expect(actual).to.be.false
  })
})