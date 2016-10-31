import React, { Component } from 'react'

import styles from './index.css';

class YellowTitle extends Component {
    render () {
        return (
            <h2 className={ styles.title }>
                { 'This is yellow title' }
            </h2>
        )
    }
}

export default YellowTitle
