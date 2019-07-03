function takeANumber(currentLine, personName) {
  var i = 0
  currentLine.push(i++)
  return `Welcome, ${personName}. You are number ${currentLine.slice(i, i+1)} in line.`
}
