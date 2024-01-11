import { useContext, useRef, useState } from "react";
import PaginationA from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";
import crbtn from "../assets/submit-icon.svg";
function PerPage() {
  let inputRef = useRef();
  let { perPage, setPerPage } = useContext(CryptoContext);
  function handlePerPage(e) {
    e.preventDefault();
    let val = inputRef.current.value;
    setPerPage(Number(val));
  }
  return (
    <>
      <form
        onSubmit={handlePerPage}
        className="relative  justify-center mx-auto flex items-center font-nunito md:mr-12"
      >
        <label htmlFor="perpage" className="relative   font-semibold mr-1">
          Per Page:
        </label>
        <input
          ref={inputRef}
          placeholder={perPage ? `${perPage}` : "10"}
          type="number"
          min={5}
          max={250}
          name="perpage"
          required
          className="w-16 required bg-gray-200 pl-2 outline-0 border-transparent placeholder:text-gray-100 border leading-4 focus:border-cyan rounded-md"
        />
        <button type="submit">
          <img src={crbtn} alt="submit" />
        </button>
      </form>
    </>
  );
}
function Pagination() {
  let { page, setPage, totalPage, settotalpages, perPage, cryptoData } =
    useContext(CryptoContext);
  let totalpage = Math.ceil(totalPage / perPage);
  function prev() {
    if (page > totalpage) return null;
    if (page == 1) return null;
    setPage((prev) => prev - 1);
  }
  function next() {
    if (page == totalpage) return null;
    setPage((prev) => prev + 1);
  }
  function multiStepNext() {
    if (page + 3 >= totalpage) {
      setPage(totalpage - 1);
    } else {
      setPage(page + 3);
    }
  }
  function multiStepPrev() {
    if (page - 3 <= 1) {
      setPage(totalpage + 1);
    } else {
      setPage(page - 2);
    }
  }
  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex items-center flex-col  md:flex-row">
        <PerPage />
        <ul className="flex items-center justify-center text-sm">
          <li className="flex  items-center">
            <button onClick={prev} className="outline-0 hover:text-cyan w-8">
              <img
                className="w-full h-auto -rotate-180"
                src={PaginationA}
                alt="Prev"
              />
            </button>
          </li>
          {page - 1 > 3 ? (
            <li>
              <button
                onClick={multiStepPrev}
                className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg "
              >
                ....
              </button>
            </li>
          ) : null}

          {page - 1 != 0 ? (
            <li>
              <button
                onClick={prev}
                className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
              >
                {page - 1}
              </button>
            </li>
          ) : null}
          <li>
            <button
              disabled
              className="outline-0 bg-cyan rounded-full w-8 h-8 flex items-center justify-center text-gray-200 mx-1.5"
            >
              {page}
            </button>
          </li>
          {page == totalpage ? null : (
            <li>
              <button
                onClick={next}
                className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
              >
                {page + 1}
              </button>
            </li>
          )}

          {page == totalpage && page == totalpage - 1 ? null : (
            <li>
              <button
                onClick={multiStepNext}
                className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg "
              >
                ....
              </button>
            </li>
          )}

          {page != totalpage - 1 && page < totalpage ? (
            <>
              <li>
                <button
                  onClick={() => setPage(totalpage)}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                >
                  {totalpage}
                </button>
              </li>
              <li>
                <button
                  onClick={next}
                  className="outline-0 hover:text-cyan w-8"
                >
                  <img className="w-full h-auto" src={PaginationA} alt="Next" />
                </button>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Pagination;
