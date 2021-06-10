import React, {useReducer, useEffect, useCallback} from 'react'
import logo from './logo.svg'
import './App.css'
import {reducer, defaultState, ACTION_START, ACTION_DONE} from './appState'
import {useListDataGenerator, defaultTitleGeneratorFactory} from './hooks/dataGeneration'
import {IListItem} from './domain/IListItem'
import {List} from './components/List'

/**
 * Creates a single IListItem by given title
 * @param str {string}
 * @return {IListItem}
 */
const itemFactory = (str: string): IListItem => ({id: str, title: str})

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const generateData = useListDataGenerator<IListItem>(defaultTitleGeneratorFactory, itemFactory)

  /**
   * Produce a new set of Items.
   */
  const produceItems = async () => {
    dispatch({
      type: ACTION_START,
    })
    // I DONT USE PROPS OR CONST FOR FOLLOWING ARGUMENTS CAUSE IT IS ROOT COMPONENT OF THIS APP
    // THE TASK IS REFACTORING - NOT OPTIMIZATION OR REWRITING
    const data: IListItem[] = await generateData(20, 10)
    dispatch({
      type: ACTION_DONE,
      payload: data
    })
  }

  /**
   * Effect to emulate componentDidMount
   */
  useEffect(() => {
    // I use IIFE to avoid "Unhandled promise rejection" warning
    (async () => {
      await produceItems()
    })()
  }, []) // need @eslintignore to avoid warning for missing dependencies

  /**
   * Format title string (memoized)
   */
  const titleFormatter = useCallback((title: string) => `Title is:${title}!`, [])

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <div>
        <button className="App-button" onClick={produceItems}>
          Add More
        </button>
      </div>
      <div>
        {/* list of items */}
        <List items={state.items} titleFormat={titleFormatter}/>

        {/* indicate new elements are coming */}
        {state.isLoading && (<div>Some elements are generating....</div>)}
      </div>
    </div>
  )
}

export default App
