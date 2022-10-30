import { db as db_, SubagramDB } from 'src/local-database'
import { useWordsStore } from 'stores/words'
import { Anagram, AnagramFromDB, WordDetails } from 'src/interfaces'

export class WordsCRUD {
  db: SubagramDB

  constructor(db: SubagramDB) {
    this.db = db
  }

  async loadWordsToStore() {
    const wordsStore = useWordsStore()

    const words = await this.db.getWords()
    wordsStore.addAllWords(words)
  }

  async createWord(text: string): Promise<string> {
    const wordsStore = useWordsStore()
    const wordText = text.toLowerCase()

    try {
      const wordId = await this.db.createWord(wordText)
      wordsStore.addWord(wordId, wordText)
    } catch (e) {
      console.error('could not create word', wordText, e)
    }

    return wordText
  }

  async loadAnagramsForWords() {
    const wordsStore = useWordsStore()
    await Promise.all(
      Object.values(
        wordsStore.words,
      ).map((word) => this.loadAnagramsForWord(word)),
    )
  }

  async wordExists(text: string): Promise<boolean> {
    const wordText = text.toLowerCase()
    const word = await this.db.getWord(wordText)
    if (!word) {
      return false
    }

    const wordsStore = useWordsStore()
    wordsStore.addWord(word.id as number, word.text)

    return true
  }

  async loadAnagramsForWord(word: WordDetails) {
    const wordsStore = useWordsStore()

    const anagrams = await this.db.getAnagrams(word.id)

    wordsStore.addAnagrams(word, anagrams as AnagramFromDB[])
  }

  async addAnagramToWord(
    wordDetails: WordDetails,
    anagramText: string,
  ) {
    const wordsStore = useWordsStore()
    const newAnagramText = anagramText.toLowerCase()

    try {
      const anagramId = await this.db.addAnagram(wordDetails.id, newAnagramText)
      wordsStore.addAnagram(wordDetails, anagramId, newAnagramText)
    } catch (e) {
      console.error('could not create anagram', newAnagramText, wordDetails)
    }
  }

  async deleteAnagram(word: WordDetails, anagram: Anagram) {
    const wordsStore = useWordsStore()

    wordsStore.removeAnagram(word, anagram.text)
    await this.db.deleteAnagram(anagram.id)
  }

  async deleteWord(word: WordDetails) {
    const wordsStore = useWordsStore()
    wordsStore.removeWord(word)
    await this.db.words.delete(word.id)
    await this.db.anagrams.where('wordId').equals(word.id).delete()
  }
}

export const wordsCrud = new WordsCRUD(db_)
