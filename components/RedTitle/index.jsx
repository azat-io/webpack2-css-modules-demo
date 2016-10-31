import React, { Component } from 'react'

import styles from './index.css';

class RedTitle extends Component {
    render () {
        return (
            <h1 className={ styles.title }>
                { 'This is red title' }
            </h1>
        )
    }
}

export default RedTitle
