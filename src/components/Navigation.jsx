
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="w-[40%] mt-16 flex justify-around align-middle border border-cyan rounded-md">
      <NavLink to={"/"} className={({isActive})=>{
          return `w-full text-base m-2.5 text-center font-nunito  border-none capitalize rounded-sm
        ${isActive?"bg-cyan text-gray-300":"bg-gray-200 text-gray-100 active:bg-cyan active:text-gray-200 hover:text-cyan"}`
      }}>
        Crypto
      </NavLink>
      <NavLink to={"/trending"}  className={({isActive})=>{
          return `w-full text-base m-2.5 text-center font-nunito  border-none capitalize rounded-sm
        ${isActive?"bg-cyan text-gray-300":"bg-gray-200 text-gray-100 active:bg-cyan active:text-gray-200 hover:text-cyan"}`
      }}>
        Trending
      </NavLink>
      <NavLink to={"/saved"}  className={({isActive})=>{
          return `w-full text-base m-2.5 text-center font-nunito  border-none capitalize rounded-sm
        ${isActive?"bg-cyan text-gray-300":"bg-gray-200 text-gray-100 active:bg-cyan active:text-gray-200 hover:text-cyan"}`
      }}>
        Saved
      </NavLink>
    </nav>
  );
}

export default Navigation;
