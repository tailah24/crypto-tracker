import styles from './coins.module.css'
import Link from 'next/link';

const Coins = ({name, price, image, volume, id, marketcap, priceChange, symbol}) => {
    return (
        <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={styles.coins_container}>
            <div className={styles.coin_row}>
                <div className={styles.coin}>
                    <img src={image} alt={name} className={styles.coin_image}></img>
                    <h1 className={styles.coin_name}>{name}</h1>
                    <p className={styles.coin_symbol}> {symbol}</p>
                    
                </div>
                <div className={styles.coin_data}>
                    <p className={styles.coin_volume}>{price}</p>
                    <p className={styles.coin_volume}>${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className={styles.coin_percent, styles.red}> {priceChange.toFixed(3)}%</p>
                    ) : (
                        <p className={styles.coin_percent,  styles.green}> {priceChange.toFixed(3)}%</p>
                    )}
                    <p className={styles.coin_marketcap}>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>

            </div>
        </div>
        </a>
    </Link>
    )
}

export default Coins
