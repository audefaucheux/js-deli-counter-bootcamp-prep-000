function takeANumber(currentLine, personName) {
  currentLine.push(personName)
  return `Welcome, ${personName}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    var serving = katzDeliLine.slice(0,1)
    katzDeliLine.shift()
    return `Currently serving ${serving}.`
  } else {return "There is nobody waiting to be served!"}
}

function currentLine(line) {
 if (line.length !== 0) {
/*     for (var i = 0; i < line.length; i++) {
      var array = ["The line is currently: "]
      array.push("test") //(`${i + 1}: ${line.slice(i,i + 1)},`)
    }
    return array
*/    var waiting = `The line is currently: `
      for (var i = 0; i < line.length; i++) {
        waiting += `${i + 1}: ${line.slice(i, i + 1)}`
      }
      return waiting
  } else { return "The line is currently empty."}
}
