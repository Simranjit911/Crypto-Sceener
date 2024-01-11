import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import TableComp from "../components/TableComp";

function Crypto() {
  return (
    <section className="w-[85%] md:w-[80%] h-[100%] relative mt-3 mb-3 md:mt-16 md:mb-24 flex-col ">
      <Filters />
      <TableComp />
      <Outlet/>
    </section>
  );
}

export default Crypto;
