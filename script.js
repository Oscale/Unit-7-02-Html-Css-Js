document.getElementById('activation').addEventListener('click', Begin)

let inputa = 0

function Begin () {
  inputa = document.getElementById('input').value

  inputa = parseInt(inputa)

  if (inputa > 0) {
    document.getElementById('output').innerHTML = 'Positive'
  } else {
    document.getElementById('output').innerHTML = 'Negative'
  }
}
