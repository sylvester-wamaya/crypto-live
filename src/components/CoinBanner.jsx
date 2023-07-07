
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { viewDetail } from '../redux/coins/coinsSlice'
import { RxExternalLink } from 'react-icons/rx'
import { PropTypes } from 'prop-types'
import { useState } from 'react'

const CoinBanner = ({color, icon, name, id, symbol}) => {
  const [isHover, setIsHover] = useState(false);
  CoinBanner.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }
const dispatch = useDispatch()
const handleMouseEnter = () => {
  setIsHover(true);
};
const handleMouseLeave = () => {
  setIsHover(false);
};
  return (
   
      <Link to={`${symbol}`} onClick={()=>dispatch(viewDetail(id)) } style={{ backgroundColor: isHover ? `${color + '70'}`:`${color + '50'}`, backgroundImage:`url(${icon})`}} className='banner' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><div className='ban-content'><p>{name}</p><span><RxExternalLink style={{backgroundColor:`${color}`}}/></span></div></Link>
   
  )
}

export default CoinBanner
