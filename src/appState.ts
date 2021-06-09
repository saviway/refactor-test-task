// file contains "state" of the app
// There is simple application therefore I use simple names like "IState", "IAction"

import { IListItem } from './domain/IListItem'

/**
 * Describes available action within in App component
 */
export type APP_ACTION_TYPE = 'ACTION_GENERATE_DATA_START' | 'ACTION_GENERATE_DATA_DONE'

// helpers
export const ACTION_START: APP_ACTION_TYPE = 'ACTION_GENERATE_DATA_START'
export const ACTION_DONE: APP_ACTION_TYPE = 'ACTION_GENERATE_DATA_DONE'

/**
 * App component state.
 */
export interface IState {
  items: IListItem[],
  isLoading: boolean
}


/**
 * Action for reducer in App.js
 */
export interface IAction {
  type: string
  payload?: unknown
}

/**
 * Default state
 */
export const defaultState: IState = {
  items: [],
  isLoading: false
}

/**
 * A reducer to manage app state.
 * Will be used in useReducer
 * @param state {IState} current state
 * @param action {IAction} action to get a new state
 */
export const reducer = (state: IState, action: IAction): IState => {
  const {type, payload} = action
  switch (type) {
    // generation data start
    case ACTION_START: {
      return {
        ...state,
        isLoading: true
      }
    }

    // generation end
    case ACTION_DONE: {
      return {
        ...state,
        items: [...state.items, ...payload as IListItem[]], // I would prefer to use a library like 'immer js' but it is simple application
        isLoading: false
      }
    }

    // I won't try to process errors cause it's not a task of my issue - only refactoring by requirement

    default: {
      return state
    }
  }
}