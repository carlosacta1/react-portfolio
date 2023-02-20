import React from 'react';
import styles from './Header.module.css'

export default function Header(props) {
    return (
        <div>
            <header className={styles.header}>
                <img src={props.image} alt="" />
                <div className={styles.name}>{props.name}</div>
                <nav className={styles.nav}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
        </div>
    );
}