import { defineStore } from 'pinia'
import {
  Anagram,
  AnagramFromDB,
  WordDetails,
  WordDetailsDB,
} from 'src/interfaces'

export const useWordsStore = defineStore('words', {
  state: () => ({
    words: {} as ({ [wordText: string]: WordDetails }),
  }),

  getters: {
    // getDetails: (state) => (wordText: string) => state.words[wordText],
    hasWords: (state) => Object.keys(state.words).length,
  },

  actions: {
    addAllWords(words: WordDetailsDB[]) {
      words.forEach((dbWord) => {
        this.words[dbWord.text] = {
          id: dbWord.id as number,
          text: dbWord.text,
          anagrams: [],
        }
      })
    },
    addWord(wordId: number, wordText: string) {
      this.words[wordText] = {
        id: wordId,
        text: wordText,
        anagrams: [],
      }
    },
    addAnagram(
      wordDetails: WordDetails,
      anagramId: number,
      anagramText: string,
    ) {
      const word = this.words[wordDetails.text]
      if (!word) {
        return
      }
      word.anagrams.push({ id: anagramId, text: anagramText })
    },
    addAnagrams(
      wordDetails: WordDetails,
      anagrams: AnagramFromDB[],
    ) {
      const word = this.words[wordDetails.text]
      if (!word) {
        return
      }
      word.anagrams.push(...anagrams)
    },
    removeAnagram(wordDetails: WordDetails, anagramText: string) {
      const word = this.words[wordDetails.text]
      if (!word) {
        return
      }
      word.anagrams = word.anagrams.filter((s) => s.text !== anagramText)
    },
    removeWord(wordDetails: WordDetails) {
      delete this.words[wordDetails.text]
    },
    findAnagram(wordDetails: WordDetails, anagramText: string): Anagram | undefined {
      const word = this.words[wordDetails.text]
      if (!word) {
        return undefined
      }
      return word.anagrams.find((a) => a.text === anagramText)
    },
  },
})
