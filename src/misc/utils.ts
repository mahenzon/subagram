export function sortStringToArray(str: string): string[] {
  return [...str].sort((a, b) => a.localeCompare(b))
}

export function sortAlphabet(str: string): string {
  return sortStringToArray(str).join('')
}

export function textIsAnagram(wordText: string, anagramText: string): boolean {
  const wordTextSorted = sortStringToArray(wordText.toLowerCase())
  const anagramTextSorted = sortStringToArray(anagramText.toLowerCase())

  let anagramLetterIndex = 0
  let wordLetterIndex = 0
  while (wordLetterIndex < wordTextSorted.length) {
    if (anagramTextSorted[anagramLetterIndex] === wordTextSorted[wordLetterIndex]) {
      anagramLetterIndex += 1
      if (anagramLetterIndex >= anagramTextSorted.length) {
        return true
      }
    }
    wordLetterIndex += 1
  }

  return false
}
