export default {
  WIP: 'Ещё не готово...',
  languageSelector: {
    title: 'Язык',
  },
  app: {
    title: 'Субаграм',
  },
  nav: {
    title: 'Действия',
    docs: {
      title: 'Документация',
      caption: 'Сайт quasar.dev',
    },
    createWord: {
      title: 'Добавить',
      caption: 'Создать новое слово',
    },
    about: {
      title: 'Описание',
      caption: 'Страница с информацией',
    },
  },
  wordCard: {
    foundCount: 'Ещё не найдено слов | Найдено {n} слово | Найдено {n} слова | Найдено {n} слов',
    continue: 'Продолжить',
  },
  wordsList: {
    continue: 'Продолжить:',
    noWords: 'Пока нет ни одного слова',
    createNew: 'Добавить новое слово',
  },
  wordConfirmDelete: {
    q: 'Точно удалить слово \'{word}\' вместе со всеми анаграммами?',
    cancel: 'Отменить',
    confirm: 'Удалить',
  },
  wordCreate: {
    title: 'Введите слово',
    description: 'Чем длиннее слово, тем больше новых слов можно составить из его букв.',
    newWordInputLabel: 'Новое слово',
    suggestedWord: 'Слово `{0}` ещё не создано. Добавить?',
    inputHint: 'Одно слово, без пробелов',
    required: '* Введите слово',
    minLength: 'Минимум 3 буквы',
    create: 'Добавить слово',
    alreadyExists: 'Такое слово уже добавлено',
  },
  wordDetails: {
    wordsCount: 'Найдено слов:',
    anagramDeleted: 'Анаграма {word} удалена',
    anagramDeletedUndo: 'Отменить',
  },
  anagramCreate: {
    alreadyExists: 'Такая анаграмма уже добавлена',
    minLength: 'Минимум 2 буквы',
    isSameWord: 'Это исходное слово',
    isNotAnagram: 'Не анаграмма',
    inputLabel: 'Добавить слово',
    inputHint: 'Анаграмма, минимум 2 буквы',
  },
  about: {
    title: 'Описание',
    text: 'Составляйте слова из букв выбранного слова. '
      + 'Например, из слова "фтор" можно составить слова "торф", "рот", "ор", '
      + 'но нельзя составить слово "рост", так как буквы "с" нет в слове "торф".\n\n'
      + 'Слово "субаграм" построено из слов "субстрат" и "анаграмма".',
    create: 'Создать новое слово',
  },
}
