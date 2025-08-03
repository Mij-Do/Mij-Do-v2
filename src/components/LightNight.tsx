import styles from '../LightningBackground.module.css';

interface IProps {
    enabled: boolean;
}

const LightningBackground = ({enabled}: IProps) => {
    return (
        <>
            {enabled === false ? 
                                <div className={styles.wrapperWhite}>
                                    <div className={styles.stars}></div>
                                    <div className={styles.lightning}></div>
                                </div> : 
                                <div className={styles.wrapperDark}>
                                    <div className={styles.stars}></div>
                                    <div className={styles.lightning}></div>
                                </div>}
        </>
    );
};

export default LightningBackground;
