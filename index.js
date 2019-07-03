function takeANumber(currentLine, personName) {
  currentLine.push(personName)
  return `Welcome, ${personName}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {`Currently serving ${katzDeliLine.slice(currentLine,currentLine + 1)}`}
  katzDeliLine.shift()
}
