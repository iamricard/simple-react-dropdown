import React from 'react'
import ReactDOM from 'react-dom'

export default class Dropdown extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    classNames: React.PropTypes.object,
    content: React.PropTypes.any.isRequired,
    onMouseDown: React.PropTypes.func
  }

  static defaultProps =
    { classNames: {}
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
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        this.setState({ isExpanded: false })
      }
    }
  }

  handleMouseDown = (evt) => {
    if (evt.type === 'mousedown' && event.button !== 0) return

    this.props.onMouseDown && this.props.onMouseDown(evt)
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render () {
    const { isExpanded } = this.state

    return (
      <div className={this.props.classNames.container}>
        <div
          className={this.props.classNames.trigger}
          onMouseDown={this.handleMouseDown}
          onTouchEnd={this.handleMouseDown}
        >
          {this.props.children}
        </div>

        {isExpanded && this.props.content}
      </div>
    )
  }
}
