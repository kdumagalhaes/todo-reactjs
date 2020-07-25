import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>ToDo React</h1>
            <p>This is a simple to do app made with React.js</p>
        </div>
    )
}

export default Header