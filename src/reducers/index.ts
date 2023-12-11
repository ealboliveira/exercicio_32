import { combineReducers } from 'redux'
import contatosReducer from './contatos'

const rootReducer = combineReducers({
  contatos: contatosReducer
})

export default rootReducer
