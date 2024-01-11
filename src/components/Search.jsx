import { useContext, useState } from "react";
import icon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";
import Loader from "./Loader";
function SearchInput({ handleSearch }) {
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

  let [srchval, setSrchVal] = useState("");

  //input feild value
  function handleSub(e) {
    e.preventDefault();
    let q = e.target.value;
    setSrchVal(q);
    handleSearch(srchval);

  }
  //select coin from list of coins
  function selectCoin(coin) {
    setCoinSearch(coin);
    setSrchVal("");
    // setSearchData()
  }
  //form submit
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(srchval);
  }
  return (
    <>
      <form
        className="md:w-1/3  relative flex items-center ml-7 font-nunito"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleSub}
          value={srchval}
          className="w-full rounded bg-gray-200 placeholder:text-gray-100  required pl-2 border border-transparent focus:border-cyan outline-0"
          type="search"
          placeholder="Enter Coin Name"
        />
        <button
          type="submit"
          className="absolute right-1 hover:scale-200 duration-200"
        >
          <img className="w-full h-auto" src={icon} alt="srch" />
        </button>
      </form>
      {srchval.length > 0 ? (
        <ol className="absolute  h-96 top-11 w-full   backdrop-blur-sm rounded-xl shadow-2xl overflow-x-hidden py-2 bg-gray-200 bg-opacity-20  scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200 decoration-0 ">
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className="w-[1.5rem] h-[1.5rem] mr-2"
                    src={coin.thumb}
                    alt={coin.name}
                  />
                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <Loader span={"Searching...."} />
          )}
        </ol>
      ) : null}
    </>
  );
}
function Search() {
  let { getSearchResult } = useContext(CryptoContext);

  let debouncecall = debounce(function (q) {
    getSearchResult(q);
  }, 3000);

  return (
    <>
      <SearchInput handleSearch={debouncecall} />
    </>
  );
}

export default Search;
