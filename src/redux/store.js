import { createStore } from 'redux'
import reducer from './ducks'

export const store = createStore(reducer)
