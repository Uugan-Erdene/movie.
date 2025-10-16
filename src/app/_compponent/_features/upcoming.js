"use client";
import { Coming } from "./coming";
import { MovieCardList } from "../MovieCard";
import { SmallStar } from "../icons/smallStar";
import { useRouter } from "next/navigation";

export const UpComing = (props) => {
  const { title, rating, photo, movieId } = props;
  console.log("this is movei", movieId);
  const router = useRouter();
  const handleMovieClick = () => {
    router.push(`movie-detail/${movieId}`);
  };
  return (
    <div
      className="w-[229.73px] h-[439px] cursor-pointer bg-[#f4f4f4] rounded-lg "
      onClick={handleMovieClick}
    >
      <img src={photo} />
      <div className="flex items-center">
        <SmallStar />
        <p className="text-[gray]"> {rating}/10</p>
      </div>
      <div>
        <MovieCardList title={title} />
      </div>
    </div>
  );
};
