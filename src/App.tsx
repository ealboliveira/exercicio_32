import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import FormularioAdicionarContato from './components/FormularioAdicionarContato'
import ListaContatos from './components/ListaContatos'

const store = createStore(rootReducer)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Lista de Contatos</h1>
        <FormularioAdicionarContato />
        <ListaContatos />
      </div>
    </Provider>
  )
}

export default App
