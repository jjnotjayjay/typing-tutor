var phrase = 'Amazingly few discotheques provide jukeboxes.'

var letters = []
for (var i = 0; i < phrase.length; i++) {
  letters.push({
    letter: phrase[i]
  })
}

function renderLetter(letter) {
  var $letter = document.createElement('span')
  $letter.textContent = letter
  return $letter
}
