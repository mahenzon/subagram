import { describe, expect, it } from '@jest/globals'
import { textIsAnagram } from 'src/misc/utils'

describe('textIsAnagram', () => {
  it.each([
    ['кот', 'ток', true],
    ['Собака', 'Бок', true],
    ['Word', 'ord', true],
    ['cat', 'cat', true],
    ['drive', 'hive', false],
    ['потоп', 'пот', true],
    ['потоп', 'топот', false],
    ['Агностик', 'акт', true],
    ['Агностик', 'тик', true],
    ['Агностик', 'ток', true],
    ['Агностик', 'нос', true],
    ['Агностик', 'ад', false],
  ])('checks %p => %p anagram to be %p', (wordText: string, anagramText: string, result: boolean) => {
    expect(textIsAnagram(wordText, anagramText)).toBe(result)
  })
})
