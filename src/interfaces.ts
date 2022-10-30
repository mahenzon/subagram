export interface Anagram {
  id: number,
  text: string,
}

export interface WordDetails {
  id: number,
  text: string,
  anagrams: Anagram[],
}

export interface WordDetailsDB {
  id?: number,
  text: string,
}

export interface AnagramDB {
  id?: number,
  wordId: number,
  text: string,
}

export interface AnagramFromDB extends AnagramDB {
  id: number,
}
