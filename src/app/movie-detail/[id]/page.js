"use client";
import { MoreLikeThis } from "../moviesection";
import { MailAppPhone } from "@/app/_compponent/_features/mailApp";
import { Star } from "@/app/_compponent/icons/star";
import { Navbar } from "@/app/_compponent/navbar";
import { Triangle } from "@/app/_compponent/icons/triangle";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function MovieDetail() {
  const [nextSlidedata, setNextSlideData] = useState();
  const [nextSlidedata2, setNextSlideData2] = useState();
  const [whatchtrailer, setWatchTrailer] = useState();
  const movieTrailerYoutube = () => {
    setWatchTrailer(whatchtrailer + 1);
    console.log("wathch trailer");
  };

  const param = useParams();
  const { id } = param;
  console.log(id);
  const apiLink = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const apiLink2 = `https://api.themoviedb.org/3//movie/${id}/credits?language=en-US`;
  const apiLink3 = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    console.log("waesdrtfygh", jsonData);

    setNextSlideData(jsonData);
  };

  const getData2 = async () => {
    const data = await fetch(apiLink2, options);
    const jsonData2 = await data.json();
    console.log("waesdrtfygh", jsonData2);
    setNextSlideData2(jsonData2);
  };
  const getData3 = async () => {
    const data = await fetch(apiLink3, options);
    const jsonData3 = await data.json();
    console.log("waesdrtfygh", jsonData3);
    setNextSlideData2(jsonData3.results);
  };

  useEffect(() => {
    getData();
    getData2();
    getData3();
  }, [id]);

  if (!id) {
    return <div>some thingwrong...</div>;
  }
  console.log("this is ", param);

  return (
    <div className="w-[1440px] m-auto">
      <Navbar />
      <div className="w-[1080px] m-auto">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              {nextSlidedata?.original_title}
            </h1>
            <p>{nextSlidedata?.release_date}</p>
          </div>
          <div>
            <p>Raiting</p>
            <div className="flex items-center gap-2">
              <Star />
              <div>
                <div className="flex ">
                  <p className="font-medium">{nextSlidedata?.vote_average}</p>
                  <p className="text-[gray]">/10</p>
                </div>
                <div>
                  <p className="text-[gray]">37k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  gap-32  ">
          <div className="w-[290px]   h-[428px]">
            <img
              className="w-full h-full"
              src={`https://image.tmdb.org/t/p/original${nextSlidedata?.poster_path}`}
            />
          </div>
          <div className="w-[760px] h-[428px] relative">
            <img
              className="w-full h-full"
              src={`https://image.tmdb.org/t/p/original${nextSlidedata?.backdrop_path}`}
            />
            <div
              onClick={movieTrailerYoutube}
              className="flex gap-2 items-center absolute left-10 top-90"
            >
              <button className="cursor-pointer bg-white flex justify-center items-center w-[40px] rounded-full h-[40px]">
                <Triangle />
              </button>
              <button className="cursor-pointer text-white">
                Play trailer
              </button>
              {/* ({watchtrailer}) */}
            </div>
          </div>
        </div>
        <div className="flex mt-10 flex-col gap-[32px]">
          <div className="flex gap-4">
            {nextSlidedata?.genres?.map((item, index) => {
              return (
                <p
                  key={index}
                  className="w-[77px] h-[20px] cursor-pointer flex items-center rounded-3xl border border-gray-100"
                >
                  {item?.name}
                </p>
              );
            })}
          </div>
          <div>
            <p>{nextSlidedata?.name}</p>
          </div>
          <div className="flex gap-15">
            <p className="font-bold">Director</p>
            {nextSlidedata2?.crew?.slice(3, 6)?.map((item, index) => {
              return <p key={index}>{item?.name}</p>;
            })}
          </div>
          <div className="flex gap-17">
            <p className="font-bold">Writers</p>
            {nextSlidedata2?.crew?.slice(0, 3)?.map((item, index) => {
              return <p key={index}>{item?.name}</p>;
            })}
          </div>
          <div className="flex gap-21">
            <p className="font-bold"> Stars</p>
            {nextSlidedata2?.cast?.slice(0, 3)?.map((item, index) => {
              return <p key={index}>{item?.name}</p>;
            })}{" "}
          </div>
        </div>
        <MoreLikeThis />
      </div>
      <MailAppPhone />
    </div>
  );
}
