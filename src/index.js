import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'))
