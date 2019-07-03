function takeANumber(currentLine, personName) {
  currentLine.push(personName)
  return `Welcome, ${personName}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    `Currently serving ${katzDeliLine.slice(0,1)}.`
    katzDeliLine.shift()
    return katzDeliLine
  } else {return "There is nobody waiting to be served!"}
}
