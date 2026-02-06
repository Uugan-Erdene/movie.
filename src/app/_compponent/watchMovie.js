"use client";
import { useState, useEffect } from "react";
import { Star } from "./icons/star";
import { Triangle } from "./icons/triangle";
import { Bullet } from "./icons/bullet";
import { LeftBullet } from "./icons/leftBullet";

const apiLink = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const WatchMovie = () => {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const res = await fetch(apiLink, options);
    const json = await res.json();

    const allResults = json.results || [];
    const slicedResults =
      allResults.length > 17 ? allResults.slice(17) : allResults;
    setMovies(slicedResults);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-150 overflow-x-auto overflow-y-hidden flex flex-row snap-x snap-mandatory">
      {movies.map((movie) => (
        <div key={movie.id} className="relative min-w-full h-full snap-center ">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay content */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center pl-36 gap-6 bg-black/30">
            <div className="flex flex-col gap-6 max-w-175">
              <div>
                <h2 className="text-white text-lg">{movie.original_title}</h2>

                <div className="flex flex-col gap-2">
                  <h1 className="text-white text-4xl font-bold">
                    {movie.title}
                  </h1>

                  <div className="flex items-center gap-1">
                    <Star />
                    <p className="text-white">{movie.vote_average}</p>
                    <p className="text-gray-400">/10</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-white line-clamp-5">{movie.overview}</p>

                <div className="w-36 h-10 bg-white flex justify-center items-center rounded-md">
                  <button className="flex items-center gap-2 text-black cursor-pointer">
                    <Triangle />
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>

            <div className="pr-12">
              <div className="w-10 h-10 bg-white cursor-pointer flex justify-center items-center rounded-full">
                <button className="cursor-pointer">
                  <Bullet />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
