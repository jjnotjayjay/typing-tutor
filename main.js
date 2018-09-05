var $app = document.querySelector('.app')

var appState = {
  phraseToType: 'Amazingly few discotheques provide jukeboxes.',
  lettersToType: [],
  currentCharacter: 0
}

for (var i = 0; i < appState.phraseToType.length; i++) {
  appState.lettersToType.push({
    letter: appState.phraseToType[i],
    index: i
  })
}

function renderLetter(letter) {
  var $letter = document.createElement('span')
  $letter.textContent = letter.letter
  if (letter.index === appState.currentCharacter) {
    $letter.classList.add('current-character')
  }
  return $letter
}

function renderPhrase(phrase) {
  phrase.forEach(char => {
    $app.appendChild(renderLetter(char))
  })
}

renderPhrase(appState.lettersToType)
