import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

function SavedShows() {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);
  function handleLeft() {
    document.querySelector(`#slider`).scrollLeft -= 500;
  }
  function handleRight() {
    document.querySelector(`#slider`).scrollLeft += 500;
  }
  async function handleDelete(item) {
    try {
      const temp = movies.filter((indi) => item.id !== indi.id);
      await updateDoc(doc(db, "users", `${user?.email}`), {
        savedShows: temp,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          onClick={handleLeft}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 left-0 cursor-pointer group-hover:block hidden z-10"
        />
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => {
            return (
              <div
                key={id}
                className="w-[150px] sm:w-[200px] md:[w-[240px] lg;w-[200px] inline-block  cursor-pointer  relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={"https://image.tmdb.org/t/p/w500/" + item?.img}
                  alt={item?.title}
                ></img>
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                  <p className="white-space-normal text-cs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.title}
                  </p>
                  <p
                    className="absolute right-4 top-4 text-gray-300"
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          size={40}
          onClick={handleRight}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 right-0 cursor-pointer group-hover:block hidden z-10"
        />
      </div>
    </div>
  );
}

export default SavedShows;
