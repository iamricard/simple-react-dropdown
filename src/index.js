import React from 'react'

const sx = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'default',
    zIndex: 9
  }
}

export default class Dropdown extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    classNames: React.PropTypes.object,
    content: React.PropTypes.any.isRequired,
    onMouseDown: React.PropTypes.func
  }

  static defaultProps = {classNames: {}}

  constructor (props) {
    super(props)
    this.state = {isExpanded: false}
  }

  handleMouseDown = (evt) => {
    if (evt.target === this.refs.container) {
      this.props.onMouseDown && this.props.onMouseDown(evt)
      this.setState({isExpanded: !this.state.isExpanded})
    }
  }

  handleOverlayMouseDown = () => {
    this.setState({isExpanded: !this.state.isExpanded})
  }

  overlay =
    <div style={sx.overlay} onMouseDown={this.handleOverlayMouseDown} />

  render () {
    const {isExpanded} = this.state

    return (
      <div ref='container' className={this.props.classNames.container} onMouseDown={this.handleMouseDown}>
        {this.props.children}
        {isExpanded && this.props.content}
        {isExpanded && this.overlay}
      </div>
    )
  }
}
