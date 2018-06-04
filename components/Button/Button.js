// @flow
import * as React from 'react'

import styles from './Button.scss'

class Button extends React.Component<*, *> {

  render () {
    return (
      <button
        className={styles.Button}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button
