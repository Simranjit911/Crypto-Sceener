
import { Link } from 'react-router-dom'
import logoSvg from "../assets/logo.svg"
function Logo() {
  return (
    <Link className='absolute top-[1.5rem] left-[1.5rem] text-lg [text-decoration:none] cursor-pointer flex items-center text-cyan ' to={"/"}>
        <img src={logoSvg} className='w-8' alt="logo" />
        Crypto<span className=''>Screener</span> </Link>
  )
}

export default Logo