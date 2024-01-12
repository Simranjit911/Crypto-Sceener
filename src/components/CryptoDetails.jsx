// import { useContext, useEffect, useLayoutEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import Loader from "./Loader"
// import { useNavigate, useParams } from "react-router-dom";
// import { CryptoContext } from "../context/CryptoContext";
// import Chart from "./Chart";
// function HighLowIndigator(cp, high, low) {
//   let [green, setgreen] = useState();
//   useEffect(() => {
//     let total = high - low;
//     let greenZone = ((high - cp) * 100) / total;
//     setgreen(Math.ceil(greenZone));
//   }, [cp, high, low]);

//   return (
//     <>
//       <span
//         className="bg-red h-1.5 w-[50%] rounded-l-lg "
//         style={{ width: `${100 - green}%` }}
//       >
//         &nbsp;
//       </span>
//       <span
//         className="bg-green h-1.5 w-[50%] rounded-l-lg "
//         style={{ width: `${green}%` }}
//       >
//         &nbsp;
//       </span>
//     </>
//   );
// }

// function CryptoDetails() {
//   let { coinId } = useParams();
//   let nav = useNavigate();
//   let { coinData, getCoinDetails, currency,setcoinData } = useContext(CryptoContext);
//   useLayoutEffect(() => {
//     getCoinDetails(coinId);
//   }, [coinId]);
//   function close() {
//     nav("..");
//     setcoinData("")
//   }
//   return ReactDOM.createPortal(
//     <div
//     className="fixed top-0 overflow-scroll left-0 right-0 z-20 md:w-full w-full  h-full bg-gray-200 bg-opacity-30 backdrop-blur-sm flex  items-center justify-center "
//       onClick={close}>
//       <div onClick={(e) => e.stopPropagation()}
//         className="md:w-[65%] md:h-[75%]  px-4 h-full  bg-gray-300 bg-opacity-75 rounded-lg shadow-sm text-white relative">
//         {coinData ? (
//           <div className="flex flex-col md:flex-row items-center justify-between w-full h-full p-4">
//             <div className="flex flex-col w-[95%] md:w-[45%] h-full pr-2 ">
//             <button
//                 className=" hover:scale-125 duration-200 self-end md:hidden"
//                  onClick={close}>
//                &#10006;
//                </button>
//               <div className="flex w-full items-center">
//                 <img
//                   className="w-[3rem] h-[3rem] mx-1.5"
//                   src={coinData.image.large}
//                   alt={coinData.id}
//                 />
//                 <p className="capitalize font-medium text-xl">
//                   {coinData.name}
//                 </p>
//                 <span className="text-sm py-0.5 px-2.5 bg-cyan bg-opacity-25 text-cyan rounded-md ml-4 uppercase">
//                   {coinData.symbol}
//                 </span>
//               </div>
//               {/* Price main div */}
//               <div className="flex w-full mt-6">
//                 {/* Price */}
//                 <div className="flex flex-col w-full">
//                   <div className="flex justify-between">
//                     <span className="text-sm capitalize text-gray-100 ">
//                       Price
//                     </span>
//                     <div
//                       className={`text-md font-semibold px-1 ml-2  flex items-center rounded uppercase bg-opacity-15 ${
//                         coinData.market_data.price_change_percentage_24h > 0
//                           ? "bg-green text-green"
//                           : "bg-red text-red"
//                       }`}
//                     >
//                       {Number(
//                         coinData.market_data.price_change_percentage_24h
//                       ).toFixed(2)}
//                       %
//                     </div>
//                   </div>
//                   <h1 className="text-lg font-bold">
//                     {new Intl.NumberFormat("en-IN", {
//                       style: "currency",
//                       currency: currency,
//                       maximumSignificantDigits: 5,
//                     }).format(coinData.market_data.current_price[currency])}
//                   </h1>
//                 </div>
//               </div>
//               {/* Valuation,market cap */}
//               <div className="flex justify-between w-full mt-4 ">
//                 <div className="flex flex-col ">
//                   <span className="text-sm capitalize text-gray-100">
//                     Market Cap
//                   </span>
//                   <h2 className="font-bold text-base">
//                     {new Intl.NumberFormat("en-IN", {
//                       style: "currency",
//                       currency: currency,
//                       minimumFractionDigits: 0,
//                     }).format(coinData.market_data.market_cap[currency])}
//                   </h2>
//                 </div>
//                 <div className="flex flex-col ">
//                   <span className="text-sm capitalize text-gray-100">
//                     Fully Diluted Valuation
//                   </span>
//                   <h2 className="font-bold text-base">
//                     {new Intl.NumberFormat("en-IN", {
//                       style: "currency",
//                       currency: currency,
//                       notation: "compact",
//                     }).format(
//                       coinData.market_data.fully_diluted_valuation[currency]
//                     )}
//                   </h2>
//                 </div>
//               </div>
//               {/* Total Volume */}
//               <div className="flex justify-between w-full mt-4 ">
//                 <div className="flex flex-col ">
//                   <span className="text-sm capitalize text-gray-100">
//                     Total Volume
//                   </span>
//                   <h2 className="font-bold text-base">
//                     {new Intl.NumberFormat("en-IN", {
//                       style: "currency",
//                       currency: currency,
//                       minimumFractionDigits: 0,
//                     }).format(coinData.market_data.total_volume[currency])}
//                   </h2>
//                 </div>
//               </div>
//               {/* Indigator */}
//               <div className="flex w-full mt-4 justify-between">
//                 <HighLowIndigator
//                   cp={coinData.market_data.current_price[currency]}
//                   low={coinData.market_data.high_24h[currency]}
//                   high={coinData.market_data.high_24h[currency]}
//                 />
//               </div>
//               {/* Low and high 24h */}
//               <div className="flex justify-between w-full mt-4 ">
//                 <div className="flex flex-col ">
//                   <span className="text-sm capitalize text-gray-100">
//                     low 24h
//                   </span>
//                   <h2 className="font-bold text-base">
//                     {new Intl.NumberFormat("en-IN", {
//                       style: "currency",
//                       currency: currency,
//                       minimumFractionDigits: 5,
//                     }).format(coinData.market_data.low_24h[currency])}
//                   </h2>
//                 </div>
//                 <div className="flex flex-col ">
//                   <span className="text-sm capitalize text-gray-100">
//                     high 24h
//                   </span>
//                   <h2 className="font-bold text-base">
//                     {new Intl.NumberFormat("en-IN", {
//                       style: "currency",
//                       currency: currency,
//                       minimumFractionDigits: 5,
//                     }).format(coinData.market_data.high_24h[currency])}
//                   </h2>
//                 </div>
//               </div>
//               {/* max and circulating supply */}
//               <div className="flex justify-between w-full mt-4 ">
//                 <div className="flex flex-col ">
//                   <span className="text-sm capitalize text-gray-100">
//                     max supply
//                   </span>
//                   <h2 className="font-bold text-base">
//                     {new Intl.NumberFormat("en-IN", {
//                       style: "currency",
//                       currency: currency,
//                       minimumFractionDigits: 0,
//                     }).format(coinData.market_data.max_supply)}
//                   </h2>
//                 </div>
//                 <div className="flex flex-col ">
//                   <span className="text-sm capitalize text-gray-100">
//                     circulating supply
//                   </span>
//                   <h2 className="font-bold text-base">
//                     {new Intl.NumberFormat("en-IN", {
//                       style: "currency",
//                       currency: currency,
//                       minimumFractionDigits: 0,
//                     }).format(coinData.market_data.circulating_supply)}
//                   </h2>
//                 </div>
//               </div>
//               {/* Socials */}
//               <div className="flex w-full justify-between mt-3">
//                 <div className="flex flex-col">
//                   <a
//                     className="bg-gray-200 text-gray-100  rounded-sm shadow-sm px-1 py-0.5 font-semibold underline my-1"
//                     target="_blank"
//                     rel="noreferrer"
//                     href={coinData?.links?.homepage[0]}
//                   >
//                     {coinData?.links?.homepage[0].substring(0, 30)}
//                   </a>
//                   <a
//                     className="bg-gray-200 text-gray-100  rounded-sm shadow-sm px-1 py-0.5 font-semibold underline my-1"
//                     target="_blank"
//                     rel="noreferrer"
//                     href={coinData?.links?.blockchain_site[0]}
//                   >
//                     {coinData?.links?.blockchain_site[0].substring(0, 30)}
//                   </a>
//                   {coinData?.links?.official_forum_url[0] && (
//                     <a
//                       className="bg-gray-200 text-gray-100  rounded-sm shadow-sm px-1 py-0.5 font-semibold underline my-1"
//                       target="_blank"
//                       rel="noreferrer"
//                       href={coinData?.links?.official_forum_url[0]}
//                     >
//                       {coinData.links.official_forum_url[0].substring(0, 30)}
//                     </a>
//                   )}
//                 </div>
//                 {/* Sentiment */}
//                 <div className="flex flex-col content-start">
//                   <span className="text-sm capitalize text-gray-100">
//                     sentiment
//                   </span>
//                   <div className="flex justify-between">
//                     <div
//                       className={`text-sm px-1 ml-2 my-1 font-medium flex items-center
//           rounded uppercase bg-opacity-25 bg-green text-green`}
//                     >
//                       <span>
//                         {Number(coinData.sentiment_votes_up_percentage).toFixed(
//                           2
//                         )}
//                         %
//                       </span>
//                       <svg
//                         width="14"
//                         height="14"
//                         viewBox="0 0 14 14"
//                         fill="green"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`
//                         w-[1rem] ml-0.5
//                         fill-green rotate-180`}
//                       >
//                         <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <div
//                       className={`text-sm px-1 ml-2 my-1 font-medium flex items-center
//           rounded uppercase bg-opacity-25
//            bg-red text-red`}
//                     >
//                       <span>
//                         {Number(
//                           coinData.sentiment_votes_down_percentage
//                         ).toFixed(2)}
//                         %
//                       </span>
//                       <svg
//                         width="14"
//                         height="14"
//                         viewBox="0 0 14 14"
//                         fill=""
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`
//                         w-[1rem] ml-0.5 fill-red`}
//                       >
//                         <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className=" flex flex-col md:w-[55%] h-full pl-3 ">
//               <button
//                 className=" hover:scale-125 duration-200 self-end"
//                 onClick={close}>
//                 &#10006;
//               </button>
//               <div className="h-full">
//               <Chart id={coinData.id} />

//               </div>
//               <h3 className="text-white py-1 m-1 font-semibold text-md">Market Cap Rank: <span className="text-gray-100 capitalize mr-1">{coinData.market_cap_rank}</span></h3>

//             </div>
//           </div>
//         ) : (
//           <Loader span={"Loading"}/>
//         )}
//       </div>
//     </div>,
//     document.getElementById("model")
//   );
// }

// export default CryptoDetails;


import { useContext, useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader"
import { useNavigate, useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import Chart from "./Chart";
function HighLowIndigator(cp, high, low) {
  let [green, setgreen] = useState();
  useEffect(() => {
    let total = high - low;
    let greenZone = ((high - cp) * 100) / total;
    setgreen(Math.ceil(greenZone));
  }, [cp, high, low]);

  return (
    <>
      <span
        className="bg-red h-1.5 w-[50%] rounded-l-lg "
        style={{ width: `${100 - green}%` }}
      >
        &nbsp;
      </span>
      <span
        className="bg-green h-1.5 w-[50%] rounded-l-lg "
        style={{ width: `${green}%` }}
      >
        &nbsp;
      </span>
    </>
  );
}

function CryptoDetails() {
  let { coinId } = useParams();
  let nav = useNavigate();
  let { coinData, getCoinDetails, currency,setcoinData } = useContext(CryptoContext);
  useLayoutEffect(() => {
     getCoinDetails(coinId);
  }, [coinId]);
  function close() {
    nav("..");
    setcoinData("")
  }
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 overflow-scroll left-0 right-0 z-20 md:w-full w-full  h-full bg-gray-200 bg-opacity-30 backdrop-blur-sm flex  items-center justify-center"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:w-[65%] md:h-[75%]  px-4 h-full  bg-gray-300 bg-opacity-75 rounded-lg shadow-sm text-white relative"
      >
        {coinData ? (
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-full p-4">
            <div className="flex flex-col w-[95%] md:w-[45%] h-full pr-2 ">
              <button
                className=" hover:scale-125 duration-200 self-end md:hidden"
                onClick={close}>
                &#10006;
              </button>
              <div className="flex w-full items-center">
                <img
                  className="w-[3rem] h-[3rem] mx-1.5"
                  src={coinData.image.large}
                  alt={coinData.id}
                />
                <p className="capitalize font-medium text-xl">
                  {coinData.name}
                </p>
                <span className="text-sm py-0.5 px-2.5 bg-cyan bg-opacity-25 text-cyan rounded-md ml-4 uppercase">
                  {coinData.symbol}
                </span>
              </div>
              <h3 className="text-white py-1 font-semibold text-md md:block">Market Cap Rank: <span className="text-gray-100 capitalize mr-1">{coinData.market_cap_rank}</span></h3>
              {/* Price main div */}
              <div className="flex w-full mt-6">
                {/* Price */}
                <div className="flex flex-col w-full">
                  <div className="flex justify-between">
                    <span className="text-sm capitalize text-gray-100 ">
                      Price
                    </span>
                    <div
                      className={`text-md font-semibold px-1 ml-2  flex items-center rounded uppercase bg-opacity-15 ${
                        coinData.market_data.price_change_percentage_24h > 0
                          ? "bg-green text-green"
                          : "bg-red text-red"
                      }`}
                    >
                      {Number(
                        coinData.market_data.price_change_percentage_24h
                      ).toFixed(2)}
                      %
                    </div>
                  </div>
                  <h1 className="text-lg font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      maximumSignificantDigits: 5,
                    }).format(coinData.market_data.current_price[currency])}
                  </h1>
                </div>
              </div>
              {/* Valuation,market cap */}
              <div className="flex justify-between w-full mt-4 ">
                <div className="flex flex-col ">
                  <span className="text-sm capitalize text-gray-100">
                    Market Cap
                  </span>
                  <h2 className="font-bold text-base">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(coinData.market_data.market_cap[currency])}
                  </h2>
                </div>
                <div className="flex flex-col ">
                  <span className="text-sm capitalize text-gray-100">
                    Fully Diluted Valuation
                  </span>
                  <h2 className="font-bold text-base">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      notation: "compact",
                    }).format(
                      coinData.market_data.fully_diluted_valuation[currency]
                    )}
                  </h2>
                </div>
              </div>
              {/* Total Volume */}
              <div className="flex justify-between w-full mt-4 ">
                <div className="flex flex-col ">
                  <span className="text-sm capitalize text-gray-100">
                    Total Volume
                  </span>
                  <h2 className="font-bold text-base">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(coinData.market_data.total_volume[currency])}
                  </h2>
                </div>
              </div>
              {/* Indigator */}
              <div className="flex w-full mt-4 justify-between">
                <HighLowIndigator
                  cp={coinData.market_data.current_price[currency]}
                  low={coinData.market_data.high_24h[currency]}
                  high={coinData.market_data.high_24h[currency]}
                />
              </div>
              {/* Low and high 24h */}
              <div className="flex justify-between w-full mt-4 ">
                <div className="flex flex-col ">
                  <span className="text-sm capitalize text-gray-100">
                    low 24h
                  </span>
                  <h2 className="font-bold text-base">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,
                    }).format(coinData.market_data.low_24h[currency])}
                  </h2>
                </div>
                <div className="flex flex-col ">
                  <span className="text-sm capitalize text-gray-100">
                    high 24h
                  </span>
                  <h2 className="font-bold text-base">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,
                    }).format(coinData.market_data.high_24h[currency])}
                  </h2>
                </div>
              </div>
              {/* max and circulating supply */}
              <div className="flex justify-between  w-full mt-4 ">
                <div className="flex flex-col ">
                  <span className="text-sm capitalize text-gray-100">
                    max supply
                  </span>
                  <h2 className="font-bold text-base">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(coinData.market_data.max_supply)}
                  </h2>
                </div>
                <div className="flex flex-col ">
                  <span className="text-sm capitalize text-gray-100">
                    circulating supply
                  </span>
                  <h2 className="font-bold text-base">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(coinData.market_data.circulating_supply)}
                  </h2>
                </div>
              </div>
              {/* Socials */}
              <div className="flex w-full justify-between mt-3 text-sm md:text-md">
                <div className="flex flex-col">
                  <a
                    className="bg-gray-200 text-gray-100  rounded-sm shadow-sm px-1 py-0.5 font-semibold underline my-1"
                    target="_blank"
                    rel="noreferrer"
                    href={coinData?.links?.homepage[0]}
                  >
                    {coinData?.links?.homepage[0].substring(0, 25)}..
                  </a>
                  <a
                    className="bg-gray-200 text-gray-100  rounded-sm shadow-sm px-1 py-0.5 font-semibold underline my-1"
                    target="_blank"
                    rel="noreferrer"
                    href={coinData?.links?.blockchain_site[0]}
                  >
                    {coinData?.links?.blockchain_site[0].substring(0, 25)}..
                  </a>
                  {coinData?.links?.official_forum_url[0] && (
                    <a
                      className="bg-gray-200 text-gray-100  rounded-sm shadow-sm px-1 py-0.5 font-semibold underline my-1"
                      target="_blank"
                      rel="noreferrer"
                      href={coinData?.links?.official_forum_url[0]}
                    >
                      {coinData.links.official_forum_url[0].substring(0, 25)}..
                    </a>
                  )}
                </div>
                {/* Sentiment */}
                <div className="flex flex-col content-start text-sm">
                  <span className="text-sm capitalize text-gray-100">
                    sentiment
                  </span>
                  <div className="flex justify-between">
                    <div
                      className={`text-sm px-1 ml-2 my-1 font-medium flex items-center
          rounded uppercase bg-opacity-25 bg-green text-green`}
                    >
                      <span>
                        {Number(coinData.sentiment_votes_up_percentage).toFixed(
                          2
                        )}
                        %
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="green"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`
                        w-[1rem] ml-0.5
                        fill-green rotate-180`}
                      >
                        <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div
                      className={`text-sm px-1 ml-2 my-1 font-medium flex items-center
          rounded uppercase bg-opacity-25
           bg-red text-red`}
                    >
                      <span>
                        {Number(
                          coinData.sentiment_votes_down_percentage
                        ).toFixed(2)}
                        %
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill=""
                        xmlns="http://www.w3.org/2000/svg"
                        className={`
                        w-[1rem] ml-0.5 fill-red`}
                      >
                        <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col md:w-[55%] h-full pl-3 ">
              <button
                className=" hover:scale-125 duration-200 self-end hidden md:block"
                onClick={close}>
                &#10006;
              </button>
              <Chart id={coinData.id} />
              

            </div>
          </div>
        ) : (
          <Loader span={"Loading"}/>
        )}
      </div>
    </div>,
    document.getElementById("model")
  );
}

export default CryptoDetails;
