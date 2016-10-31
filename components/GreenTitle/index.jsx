import React, { Component } from 'react'

import styles from './index.css';

class GreenTitle extends Component {
    render () {
        return (
            <h3 className={ styles.title }>
                { 'This is green title' }
            </h3>
        )
    }
}

export default GreenTitle
