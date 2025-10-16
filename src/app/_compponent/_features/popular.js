"use client";
import { UpComing } from "./upcoming";
import { Sum } from "../icons/sum";
import { useEffect, useState } from "react";
import Link from "next/link";
const apiLink =
  " https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Popular = () => {
  const [upcomingData, setUpComingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setUpComingData(jsonData.results.splice(10));
    setLoading(false);
  };
  console.log("upcomingData", upcomingData);
  console.log("loading", loading);

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <div>...loading</div>;
  }
  if (!loading && typeof upcomingData === "undefined") {
    return <div>Something wrong</div>;
  }
  return (
    <div>
      <div className=" flex justify-center gap-[1000]">
        <h1 className="h-[50px] mt-[50px] text-2xl ">Popular</h1>
        <Link href={"popular"}>
          <button className="curser-pointer flex items-center justify-center  gap-2">
            See more <Sum />
          </button>
        </Link>
      </div>
      <div className="flex gap-8 flex-wrap justify-center ">
        {upcomingData.map((movie, index) => {
          return (
            <UpComing
              movieId={movie.id}
              key={index}
              title={movie.title}
              rating={movie.vote_average}
              photo={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
};
