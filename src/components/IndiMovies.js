import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function IndiMovies({ item }) {
  const { user } = UserAuth();
  //const [saved, setSaved] = useState(false);
  const [like] = useState(false);
  const movieId = doc(db, "users", `${user?.email}`);
  const handleFav = async () => {
    if (user?.email) {
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
      alert("Added to Watch List");
    } else {
      alert("User not logged in");
    }
  };
  return (
    <div className="w-[150px] sm:w-[200px] md:[w-[240px] lg;w-[200px] inline-block  cursor-pointer  relative p-2">
      <img
        className="w-full h-auto block"
        src={"https://image.tmdb.org/t/p/w500/" + item?.backdrop_path}
        alt={item?.title}
      ></img>
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
        <p className="white-space-normal text-cs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p onClick={handleFav} className="absolute top-4 left-4 text-gray-300">
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
}

export default IndiMovies;
