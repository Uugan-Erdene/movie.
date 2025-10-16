"use client";
import { useEffect, useState } from "react";
import { SmallStar } from "../_compponent/icons/smallStar";
import { useParams } from "next/navigation";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const MoreLikeThis = (props) => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
          options
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching upcoming movies:", err);
      }
    };
    fetchMovies(id);
  }, [id]);

  return (
    <div className="mt-10 text-black w-[1080px] mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[20px] font-semibold">More like this</h2>
        <button className="flex items-center gap-2 text-gray cursor-pointer font-medium hover:underline">
          See more →
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {movies.slice(0, 6).map((movie) => (
          <div
            key={movie.id}
            className="w-[160px] flex-shrink-0 bg-white rounded-xl shadow hover:scale-[1.02] transition-transform duration-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[240px] object-cover rounded-t-xl"
            />
            <div className="flex items-center gap-1">
              <SmallStar />
              <span className="text-[13px] text-gray-600">
                {movie.vote_average?.toFixed(1)}/10
              </span>
            </div>
            <div className="p-2 flex flex-col gap-1">
              <p className="font-semibold text-[14px] truncate">
                {movie.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
