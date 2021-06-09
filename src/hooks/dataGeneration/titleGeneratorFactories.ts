import {TitleGeneratorFn} from './useListDataGenerator'

/**
 * Characters can be used for generate titles in defaultTitleGeneratorFactory
 */
const AVAILABLE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

/**
 * Default title generator
 * @param len {number} Length of the result string
 */
export const defaultTitleGeneratorFactory: TitleGeneratorFn = (len: number) => {
  try {
    // result
    const result: string[] = []
    // optimize length accessing in for loop
    const { length } = AVAILABLE_CHARACTERS

    for (let i = 0; i < len; i++) {
      result.push(AVAILABLE_CHARACTERS
        .charAt(
          Math.floor(Math.random() * length)
        ))
    }
    return result.join('')
  } catch (e) {
    console.error(e)
    // any fallback here ❗️
    return '--'
  }
}