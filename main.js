var $app = document.querySelector('.app')

var appState = {
  phraseToType: 'Amazingly few discotheques provide jukeboxes.',
  lettersToType: [],
  currentCharacter: 0
}

for (var i = 0; i < appState.phraseToType.length; i++) {
  appState.lettersToType.push({
    letter: appState.phraseToType[i],
    index: i,
    failures: 0
  })
}

function renderLetter(letter) {
  var $letter = document.createElement('span')
  $letter.textContent = letter.letter
  if (letter.index === appState.currentCharacter) {
    $letter.classList.add('current-character')
  }
  if (letter.failures) {
    $letter.classList.add('failed')
  }
  return $letter
}

function renderPhrase(phrase) {
  $app.innerHTML = ''
  phrase.forEach(char => {
    $app.appendChild(renderLetter(char))
  })
}

function calculateScore() {
  var totalFailures = 0
  for (var i = 0; i < appState.lettersToType.length; i++) {
    if (appState.lettersToType[i].failures) {
      totalFailures++
    }
  }
  return (appState.lettersToType.length - totalFailures) / appState.lettersToType.length
}

function renderScore() {
  var $score = document.createElement('p')
  $score.textContent = 'Your score was ' + calculateScore().toFixed(2) + '%!'
  return $score
}

window.addEventListener('keydown', (e) => {
  if (e.key !== appState.lettersToType[appState.currentCharacter].letter.toLowerCase()) {
    appState.lettersToType[appState.currentCharacter].failures++
  }
  else {
    appState.currentCharacter++
  }
  renderPhrase(appState.lettersToType)
})

renderPhrase(appState.lettersToType)
