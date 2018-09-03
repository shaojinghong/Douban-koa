import React from 'react'
import { render } from 'react-dom'
import App from './app'
import {
  BrowserRouter
} from 'react-router-dom'

const rootElement = document.getElementById('app')

render(<BrowserRouter>
  <App />
</BrowserRouter>, rootElement)