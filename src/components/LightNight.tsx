import styles from '../LightningBackground.module.css';

const LightningBackground = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.stars}></div>
                <div className={styles.lightning}></div>
            </div>
        </>
    );
};

export default LightningBackground;
