import debounce from "lodash.debounce";
import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  let [cryptoData, setCryptoData] = useState();
  let [searchData, setSearchData] = useState();
  let [coinSearch, setCoinSearch] = useState("");
  let [currency, setCurrency] = useState("usd");
  let [sortBy, setSortby] = useState("market_cap_desc");
  let [page, setPage] = useState(1);
  let [totalPage, setTotalPages] = useState(250);
  let [perPage, setPerPage] = useState(10);
  let [coinData, setcoinData] = useState();

  console.log(sortBy);
  function resetFn() {
    setSearchData();
    setPage(1);
    setSortby("market_cap_desc");
    setSearchData("");
  }

  //Coin Details
  async function getCoinDetails(id) {
    setcoinData()
    try {
      let raw = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true`
      );
      let data = await raw.json();
      console.log("Data", data);
      setcoinData(data);
    } catch (error) {
      console.log(error);
    }
  }
  //All coins
  const getCryptoData = async () => {
    setCryptoData()
    setTotalPages(1320)
    // try {
    //   let raw = await fetch(`https://api.coingecko.com/api/v3/coins/list`)
    //     .then((res) => res.json())
    //     .then((json) => json);
    //   console.log(raw);
    //   setTotalPages(raw.length);
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      let raw = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
        .then((res) => res.json())
        .then((json) => json);
      //   let raw = await fetch(
      //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d&locale=en"
      //   );
      console.log(raw);
      setCryptoData(raw);
    } catch (error) {
      console.log(error);
    }
  };
  //Search  query result
  const getSearchResult = async (query) => {
    try {
      console.log("call");
      let raw = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      let data = await raw.json();
      console.log(data);
      setSearchData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  //UseLayout Function
  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page, perPage]);

  return (
    <CryptoContext.Provider
      value={{
        perPage,
        setPerPage,
        cryptoData,
        currency,
        sortBy,
        page,
        setPage,
        setcoinData,
        setSortby,
        totalPage,
        setTotalPages,
        setCryptoData,
        searchData,
        setCurrency,
        getSearchResult,
        setCoinSearch,
        resetFn,
        coinData,
        getCoinDetails,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
