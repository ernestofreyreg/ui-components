// @flow
import * as React from 'react'
import styles from '../styles/styles.scss'
import Button from '../components/Button'

export default () => (
  <div className={styles['ui-components']}>
    <div>UI Components + Flow + Snapshot Test</div>
    <div>
      <Button onClick={() => alert('Yes!!!')}>
        Oh yeah!
      </Button>
    </div>
  </div>
)
