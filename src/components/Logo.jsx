
import { Link } from 'react-router-dom'
import logoSvg from "../assets/logo.svg"
function Logo() {
  return (
    <Link className='absolute top-[1.5rem] left-[1.5rem] md:text-lg text-md [text-decoration:none] cursor-pointer flex items-center text-cyan ' to={"/"}>
        <img src={logoSvg} className='w-6 md:w-8' alt="logo" />
        Crypto<span className=''>Screener</span> </Link>
  )
}

export default Logo