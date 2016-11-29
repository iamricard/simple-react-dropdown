/* eslint-disable comma-style */

import React from 'react'
import ReactDOM from 'react-dom'

export default class Dropdown extends React.Component {
  static propTypes =
    { children: React.PropTypes.any.isRequired
    , classNames: React.PropTypes.object
    , containerProps: React.PropTypes.object
    , content: React.PropTypes.any.isRequired
    , disabled: React.PropTypes.bool
    , onMouseDown: React.PropTypes.func
    , triggerProps: React.PropTypes.object
    }

  static defaultProps =
    { classNames: {}
    , containerProps: {}
    , triggerProps: {}
    }

  state =
    { isExpanded: false
    }

  componentDidMount () {
    this.mounted = true
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }

  componentWillUnmount () {
    this.mounted = false
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  handleDocumentClick = (evt) => {
    if (this.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(evt.target)) {
        this.setState({ isExpanded: false })
      }
    }
  }

  handleMouseDown = (evt) => {
    if (this.props.disabled) return
    if (evt.type === 'mousedown' && evt.button !== 0) return

    this.props.onMouseDown && this.props.onMouseDown(evt)
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render () {
    const { isExpanded } = this.state

    return (
      <div className={this.props.classNames.container} {...this.props.containerProps}>
        <div
          className={this.props.classNames.trigger}
          onMouseDown={this.handleMouseDown}
          onTouchEnd={this.handleMouseDown}
          {...this.props.triggerProps}
        >
          {this.props.children}
        </div>

        {isExpanded && this.props.content}
      </div>
    )
  }
}
