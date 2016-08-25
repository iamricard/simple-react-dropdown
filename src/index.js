import React from 'react'
import * as styles from './styles'

export default class Dropdown extends React.Component {
  static propTypes = {
    label: React.PropTypes.any.isRequired,
    classNames: React.PropTypes.object,
    onTriggerClick: React.PropTypes.func
  }

  static defaultProps = {classNames: {}}

  constructor (props) {
    super(props)
    this.state = {isExpanded: false}
  }

  handleTriggerClick = () => {
    if (typeof this.props.onTriggerClick === 'function') {
      this.props.onTriggerClick()
    }

    this.setState({isExpanded: !this.state.isExpanded})
  }

  handleOverlayClick = () => {
    this.setState({isExpanded: !this.state.isExpanded})
  }

  renderContent = () => {
    const {isExpanded} = this.state

    if (!isExpanded) return

    return (
      <div
        className={this.props.classNames.content}
        style={isExpanded ? styles.content : {}}
      >
        {this.props.children}
      </div>
    )
  }

  renderOverlay = () => {
    if (!this.state.isExpanded) return

    return (
      <div
        ref='overlay'
        style={styles.overlay}
        onClick={this.handleOverlayClick}
      >
      </div>
    )
  }

  render () {
    return (
      <div className={this.props.classNames.container}>
        <div
          ref='trigger'
          style={this.state.isExpanded ? styles.trigger : {}}
          className={this.props.classNames.trigger}
          onClick={this.handleTriggerClick}
        >
          {this.props.label}
        </div>

        {this.renderContent()}

        {this.renderOverlay()}
      </div>
    )
  }
}
