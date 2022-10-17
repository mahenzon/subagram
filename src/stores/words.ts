import { defineStore } from 'pinia'

export interface Anagram {
  text: string,
}

export interface WordDetails {
  text: string,
  anagrams: Anagram[],
}

export const useWordsStore = defineStore('words', {
  state: () => ({
    words: {} as ({ [wordText: string]: WordDetails}),
  }),

  getters: {
    // getDetails: (state) => (wordText: string) => state.words[wordText],
    hasWords: (state) => Object.keys(state.words).length,
  },

  actions: {
    addWord(wordText: string) {
      this.words[wordText] = {
        text: wordText,
        anagrams: [
        ],
      }
    },
    addAnagram(wordText: string, anagramText: string) {
      const word = this.words[wordText]
      if (!word) {
        return
      }
      word.anagrams.push({ text: anagramText })
    },
    removeAnagram(wordDetails: WordDetails, anagramText: string) {
      const word = this.words[wordDetails.text]
      if (!word) {
        return
      }
      word.anagrams = word.anagrams.filter((s) => s.text !== anagramText)
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
