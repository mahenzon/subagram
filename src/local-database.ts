import Dexie, { Table } from 'dexie'
import { WordDetailsDB, AnagramDB, AnagramFromDB } from 'src/interfaces'

export type IndexType = number;

const Config = {
  dbName: 'subagram-words-database',
  dbVersionNumber: 1,
}

export class SubagramDB extends Dexie {
  // dbs props are added by dexie when declaring the stores()
  // We just tell the typing system this is the case

  words!: Table<WordDetailsDB, IndexType>

  anagrams!: Table<AnagramDB, IndexType>

  constructor() {
    super(Config.dbName)
    this.version(Config.dbVersionNumber)

    /*
      NOTE: Don’t declare all columns like in SQL.
      You only declare properties you want to index,
      that is properties you want to use in a where(…) query.

      Schema Syntax
      ++ Auto-incremented primary key
      & Unique
      * Multi-entry index
      [A+B] Compound index
    */

      .stores({
        // Primary key and indexed props
        words: '++id, &text',
        anagrams: '++id, [wordId+text]',
      })
  }

  getWord(wordText: string): Promise<WordDetailsDB | undefined> {
    return this.words.where('text').equals(wordText).first()
  }

  getWords(): Promise<WordDetailsDB[]> {
    return this.words.orderBy('id').toArray()
  }

  createWord(text: string): Promise<IndexType> {
    return this.words.add({ text })
  }

  addAnagram(wordId: IndexType, text: string): Promise<IndexType> {
    return this.anagrams.add({ wordId, text })
  }

  async getAnagrams(wordId: IndexType): Promise<AnagramFromDB[]> {
    return await (this.anagrams
      .where('wordId').equals(wordId)
      .toArray()) as AnagramFromDB[]
  }

  async deleteAnagram(anagramId: IndexType) {
    await this.anagrams.delete(anagramId)
  }
}

export const db = new SubagramDB()
