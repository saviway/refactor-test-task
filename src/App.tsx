import React, {useReducer, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import {reducer, defaultState, ACTION_START, ACTION_DONE} from './appState'
import {useListDataGenerator, defaultTitleGeneratorFactory} from './hooks/dataGeneration'
import {IListItem} from './domain/IListItem'
import {List} from './components/List'

const itemFactory = (str: string): IListItem => ({id: str, title: str})

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const generateData = useListDataGenerator<IListItem>(defaultTitleGeneratorFactory, itemFactory)
  useEffect(() => {
    (async () => {
      dispatch({
        type: ACTION_START
      })
      const list: IListItem[] = await generateData(2, 10)
      dispatch({
        type: ACTION_DONE,
        payload: list
      })
    })()
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <div>
        <button className="App-button">
          Add More
        </button>
      </div>
      <div>
        {/* list of items */}
        <List items={state.items}/>

        {/* indicate new elements are coming */}
        {state.isLoading && (<div>Some elements are generating....</div>)}
      </div>
    </div>
  )
}

export default App
