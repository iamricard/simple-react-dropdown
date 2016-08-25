import React from 'react'
import DOM from 'react-dom'
import Dropdown from '../src'

class App extends React.Component {
  render () {
    return (
      <Dropdown label='Sample'>
        Hello World
      </Dropdown>
    )
  }
}

DOM.render(
  <App />,
  document.getElementById('app')
)
