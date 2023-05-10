import React, { useState, useEffect } from "react";
import axios from "axios";
import IndiMovies from "./IndiMovies";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ url, type, uniq }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(url).then((resp) => setMovie(resp.data.results));
  }, [url]);

  function handleLeft() {
    document.querySelector(`#slider${+uniq}`).scrollLeft -= 500;
  }
  function handleRight() {
    document.querySelector(`#slider${+uniq}`).scrollLeft += 500;
  }
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{type}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          onClick={handleLeft}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 left-0 cursor-pointer group-hover:block hidden z-10"
        />
        <div
          id={`slider${+uniq}`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movie.map((item, id) => (
            <IndiMovies item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          size={40}
          onClick={handleRight}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 right-0 cursor-pointer group-hover:block hidden z-10"
        />
      </div>
    </>
  );
}

export default Row;
