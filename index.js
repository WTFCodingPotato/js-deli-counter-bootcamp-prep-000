function takeANumber(current, newPerson) {
  var linePosition = current.length + 1
  current.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${linePosition} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
  }
  return 'Currently serving ${katzDeliLine[0]}!'
  katzDeliLine.shift()
}
function currentLine(theLine) {
  for (var i = 0; i< theLine.length - 1; i++) {
    
  }
}