/**
 * Factory to generate strings for list
 */
export type TitleGeneratorFn = (len: number) => string

/**
 * Hook returns a function that generates list of type T.
 * @param titleGeneratorFactory {TitleGeneratorFn} Function that generates title.
 * @param itemCreator {(str: string) => T} The functions that build T from string. Need to shape items in final list.
 * @example
 * const generate = useListDataGenerator<{id: string, title: string}>(defaultTitleGenerator, (str) => ({id: str, title: str}))
 * @returns function that generates array of type T by itemsCount and titleLen
 * @example
 * // from previous example
 * generate(20, 10) // <-- generate 20 items with title length 10 characters
 *
 * NOTE: this function just example for solve refactoring issue. it always resolves promise. Also it would HTTP request or perform other heavy operation
 */
export function useListDataGenerator<T>(titleGeneratorFactory: TitleGeneratorFn, itemCreator: (str: string) => T): (itemsCount: number, titleLen: number) => Promise<T[]> {

  // I use Promise cause this operation can be HEAVY
  return (itemsCount = 10, titleLen = 10): Promise<T[]> => new Promise((resolve) => {
    const result: Array<T> = []
    // generate needle items
    for (let i = 0; i < itemsCount; i++) {
      const title: string = titleGeneratorFactory(titleLen)
      result.push(
        itemCreator(title)
      )
    }

    // resolve
    resolve(result)
  })
}