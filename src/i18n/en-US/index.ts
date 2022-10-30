export default {
  WIP: 'This feature is not ready yet...',
  languageSelector: {
    title: 'Language',
  },
  app: {
    title: 'Subagram',
  },
  nav: {
    title: 'Actions',
    docs: {
      title: 'Docs',
      caption: 'quasar.dev site',
    },
    createWord: {
      title: 'Create',
      caption: 'Add a new word',
    },
    about: {
      title: 'About',
      caption: 'Info page',
    },
  },
  wordCard: {
    foundCount: 'Found zero words | Found one word | Found {n} words',
    continue: 'Continue',
  },
  wordsList: {
    continue: 'Continue:',
    noWords: 'No words yet',
    createNew: 'Add a new word',
  },
  wordCreate: {
    title: 'Enter a word',
    description: 'The longer the word, the more new words can be formed from its letters.',
    newWordInputLabel: 'New word',
    suggestedWord: 'Word `{0}` doesn\'t exist yet. Do you want to create it?',
    inputHint: 'A single word without spaces',
    required: '* Required',
    minLength: 'At least 3 characters',
    create: 'Add word',
    alreadyExists: 'Such word already exists',
  },
  wordDetails: {
    wordsCount: 'Words found:',
    anagramDeleted: 'Deleted anagram {word}',
    anagramDeletedUndo: 'Undo',
  },
  anagramCreate: {
    alreadyExists: 'Such anagram already exists',
    minLength: 'Minimum 2 letters',
    isSameWord: 'Is same word',
    isNotAnagram: 'Not an anagram',
    inputLabel: 'Add word',
    inputHint: 'Anagram (minimum 2 letters)',
  },
  about: {
    title: 'About',
    text: 'Create words using letters from another word. For example, '
      + 'you can use word "picture" create words "pet", "tip", "pier", "price" but '
      + 'you can\'t create "cart" because there\'s no "a" in the "picture".\n\n'
      + 'Subagram is built from "subword" and "anagram".',
    create: 'Add a new word',
  },
}
