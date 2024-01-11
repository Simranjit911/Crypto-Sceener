
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div
      className="w-[90%] h-fit md:w-[40%] bg-gray-200 mb-8
    last:mb-0 rounded-lg p-4 relative cursor-pointer
    hover:bg-gray-100 hover:bg-opacity-40
    "
      onClick={() =>{
        console.log(data.id)
        getCoinDetails(data.id)
    }}
    >
      {data ? (
        <>
          <h3 className="text-base flex  items-center my-0.5">
            <span className="text-gray-100 capitalize">name:&nbsp;</span>
            <span className="text-cyan">{data.name}</span>
            <img
              src={data.small}
              alt={data.name}
              className="w-[2rem] h-[2rem] mx-1.5 rounded-full"
            />
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              market cap rank:&nbsp;
            </span>
            <span className="text-cyan">{data.market_cap_rank}</span>
          </h3>
          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              price (in btc):&nbsp;
            </span>
            <span className="text-cyan">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">score:&nbsp;</span>
            <span className="text-cyan">{data.score}</span>
          </h3>

        
        </>
      ) : (
    <Loader span={"Loading"}/>
      )}
    </div>
  );
};

export default TrendingCoin;
