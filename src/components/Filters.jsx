import Search from "./Search";
import Reset from "../assets/reset.svg";
import crbtn from "../assets/submit-icon.svg";
import selectimg from "../assets/select-icon.svg";
import { useContext, useRef, useState } from "react";
import { CryptoContext } from "../context/CryptoContext";




function Filters() {
  let { resetFn, setCurrency, sortBy, currency, setSortby } =
    useContext(CryptoContext);
  let currencyRef = useRef(null);
  function handleCurrencySub(e) {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  }
  function handleSort(e) {
    e.preventDefault();
    let val = e.target.value;
    setSortby(val);
  }

  return (
    <div className="w-full flex-col gap-2 md:flex-row md:h-12 pt-2 pb-1 md:p-1 border-2 flex justify-between items-center border-gray-200 relative rounded-lg ">
      <Search />
      {/* Currency Form */}
      <div className="  ">
        <form
          onSubmit={handleCurrencySub}
          className="relative  justify-center mx-auto flex items-center font-nunito "
        >
          <label htmlFor="currency" className="relative   font-bold mr-2">
            Currency:
          </label>
          <input
            ref={currencyRef}
            placeholder={currency ? `${currency}` : "usd"}
            type="text"
            required
            name="currency"
            className="w-16 required bg-gray-200 pl-2 outline-0 border-transparent placeholder:text-gray-100 border leading-4 focus:border-cyan rounded-md"
          />
          <button type="submit">
            <img src={crbtn} alt="submit" />
          </button>
        </form>
      </div>
      {/* Sorting*/}
      <label className="flex relative justify-center items-center mr-2">
        <span className="mr-2 font-bold">Sort by:</span>
        <select
          className="bg-gray-200 rounded text-base outline-0 capitalize py-0.5 px-2 "
          name="sort by:"
          id=""
          onChange={handleSort}
        >
          <option value="market_cap_desc">market cap desc</option>
          <option value="market_cap_asc">market cap asc</option>
          <option value="volume_asc">volume asc</option>
          <option value="volume_desc">volume desc</option>
          <option value="id_asc">id asc</option>
          <option value="id_desc">id desc</option>
        </select>
        <img
          className="w-[1rem] h-auto absolute right-0.5 top-2"
          src={selectimg}
          alt="submit"
        />
      </label>
      {/* reset btn */}
      <button
        className="w-[1.8rem] hover:scale-150 relative duration-150"
        onClick={resetFn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          className="fill-cyan w-full h-full"
          style={{
            msTransform: "rotate(360deg)",
            WebkitTransform: "rotate(360deg)",
            transform: "rotate(360deg)",
          }}
          viewBox="0 0 24 24"
        >
          <path
           
            d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z"
          />
          <path
            
            d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"
          />
          <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
        </svg>
      </button>
    </div>
  );
}

export default Filters;
