import styles from '../LightningBackground.module.css';

const LightningBackground = () => {
    return (
        <>
            <div className={styles.wrapperDark}>
                <div className={styles.stars}></div>
                <div className={styles.lightning}></div>
            </div>
        </>
    );
};

export default LightningBackground;
