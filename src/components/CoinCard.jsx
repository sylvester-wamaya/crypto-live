
import { useSelector } from 'react-redux';
import styles from '../styles/coincard.module.css'
import {AiFillBackward} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const CoinCard = () => {
  const { selectedCoin, coins } = useSelector((store) => store.coins)
  const navigate = useNavigate()
  const coinArray = coins.filter((coin)=> coin.uuid === selectedCoin)
  const coin = coinArray[0]
if(!coin){
  return <p>Loading...</p>
}
 
      return (
        <>
        <AiFillBackward style={{fontSize:'2rem', color:`${coin.color}`, cursor:'pointer'}} onClick={()=> navigate('/')}/>
        <div style={{backgroundColor: `${coin.color + '50'}` }} className={styles.coin}>
          <div className={styles.icon}>
          <img style={{ width: '30%', height: 'auto' }} src={coin.iconUrl} />
          <p>{coin.name} (<span>{coin.symbol})</span></p>
          <i>As at: {new Date().toLocaleString()}</i>
         </div>
        <div className={styles.details}>
          <p>Rank:<span> #{coin.rank}</span></p>
          <p>Current price: <span>{formatter.format(coin.price)}</span></p>
         
         
          <p> Change: <span style={{color: coin.change<0 ? 'red' : 'green'}}>{coin.change}%</span></p>
          <p>Market Cap: <span>{formatter.format(coin.marketCap)}</span></p>
      
          </div>
          <p style={{margin:'5% 0'}}>Listed Date: {new Date(coin.listedAt * 1000).toLocaleString("en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}</p>
            </div>
          

        
        </>
      )
    




}
export default CoinCard;
