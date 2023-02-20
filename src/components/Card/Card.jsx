import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
                </div>
                <div className={styles.cardBody}>
                    <span className={styles.tag}>Technology</span>
                    <h4>{props.initialMessage}</h4>
                    <p>{props.description}</p>
                    <div className={styles.user}>
                        <img src="" alt="user" />
                        <div className={styles.userInfo}>
                            <h5>2023</h5>
                            <small>2h ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}