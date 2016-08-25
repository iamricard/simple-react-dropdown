# simple-react-dropdown

## Synposis

`simple-react-dropdown` is a very simple component that provides a dropdown of
sorts. You can actually think of it as a modal. It comes with no styles, but
with support to use CSS modules styles.

## Motivation

I couldn't find any simple re-usable dropdowns which allowed for CSS modules and
did just the one thing.

## Installation

```
npm i simple-react-dropdown -S
```

## Usage

```js
import React from 'react'
import Dropdown from 'simple-react-dropdown'

class App extends React.Component {
  render () {
    return (
      <div>
        <Dropdown label='simple dropdown'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Dropdown>
      </div>
    )
  }
}
```

### Props

#### `label: any`

Element/text/component that will be used as the trigger element.

#### `classNames?: Object`

* `trigger` key will be used for the `trigger` element wrapper as a class.
* `container` key will be used for the `container` element wrapping the entire dropdown
* `content` will be used for the actual content of the dropdown

#### `onTriggerClick?: (event: Event): void`

Callback for when the trigger element is clicked on.
