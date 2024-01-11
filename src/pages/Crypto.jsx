import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import TableComp from "../components/TableComp";

function Crypto() {
  return (
    <section className="w-[80%] h-full relative  mt-16 mb-24 flex-col ">
      <Filters />
      <TableComp />
      <Outlet/>
    </section>
  );
}

export default Crypto;
