import styles from './Stats.module.scss';

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles['stats__price']}>
        <img className={styles['stats__price-icon']} src="images/icon-ethereum.svg" alt="Ethereum icon" />
        <p className={styles['stats__price-amount']}>0.041 ETH</p>
      </div>
      <div className={styles['stats__time']}>
        <img className={styles['stats__time-icon']} src="images/icon-clock.svg" alt="Clock icon" />
        <p className={styles['stats__time-count']}>3 days left</p>
      </div>
    </div>
  );
}

export default Stats;