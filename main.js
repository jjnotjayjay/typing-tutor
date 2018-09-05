var $app = document.querySelector('.app')

var phraseToType = 'Amazingly few discotheques provide jukeboxes.'

var lettersToType = []
for (var i = 0; i < phraseToType.length; i++) {
  lettersToType.push({
    letter: phraseToType[i]
  })
}

function renderLetter(letter) {
  var $letter = document.createElement('span')
  $letter.textContent = letter.letter
  return $letter
}

function renderPhrase(phrase) {
  phrase.forEach(char => {
    $app.appendChild(renderLetter(char))
  })
}

renderPhrase(lettersToType)
