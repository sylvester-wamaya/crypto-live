
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { viewDetail } from '../redux/coins/coinsSlice'
import { RxExternalLink } from 'react-icons/rx'
import { PropTypes } from 'prop-types'

const CoinBanner = ({color, icon, name, id, symbol}) => {
  CoinBanner.prototypes = {
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }
const dispatch = useDispatch()
  return (
   
      <Link to={`${symbol}`} onClick={()=>dispatch(viewDetail(id)) } style={{ backgroundColor:`${color + '50'}`, backgroundImage:`url(${icon})`}} className='banner'><div className='ban-content'><p>{name}</p><span><RxExternalLink/></span></div></Link>
   
  )
}

export default CoinBanner
