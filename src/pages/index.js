import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

// component imports
import LinkContainer from "@/components/UI/LinkContainer";

// api imports
import fetchTorrentsHandler from "../utils/fetchTorrents.js";

// asset imports
import search_banner from './../assets/casette_asset.svg'

export default function Home() {
  const searchQueryRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState("");

  return (
    <>
      <Head>
        <title>TorrQ🧲</title>
        <meta name="description" content="Minimal Torrent Aggregator App" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-col items-center  h-full">
        {/* App Container ********************************************************************************/}
        <div className="flex relative flex-col shadow-2xl bg-primary justify-center rounded-xl h-fit  w-[95%] md:w-[65%] xl:2/3 2xl:w-[45%] mt-4  md:mt-12  py-2 ">
          {/* Homepage Banner Image Container ************************************************************/}
          <div className="  flex justify-center">
            <Image
              priority
              className="w-1/2 md:w-[35%] h-fit my-6"
              src={search_banner}
              alt="homepage search box image"
            />
          </div>
          {/* Search Box Container ***********************************************************************/}
          <form className="flex  mb-4 justify-between w-full lg:w-2/3 place-self-center  rounded-lg p-4 h-fit  ">
            <input
              ref={searchQueryRef}
              type="text"
              className="input  focus:outline-none w-full max-w-xs"
              placeholder="Torrent Search"
            />
            <button
            type="submit"
              onClick={(event) =>
                fetchTorrentsHandler([
                  event,
                  setLoading,
                  setData,
                  setError,
                  searchQueryRef.current.value,
                  pageNumber,
                ])
              }
              className={`btn btn-accent  ml-4 ${loading ? "loading" : ""}`}
            >
              SEARCH
            </button>
          </form>
          <span className="bg-secondary text-semibold py-1 px-2 text-secondary-content absolute  rounded-full top-2 right-2 w-fit" >@aru</span>
        </div>

       
        {/* result list */}
        {data && data.length > 0 ? (
          <div className="flex flex-col  h-fit  w-[95%] md:w-[65%] xl:2/3 2xl:w-[45%] mt-12   py-2">
            {data.map((item, index) => (
              <LinkContainer key={index} data={item} />
            ))}
          </div>
        ) : null}

        <div className="flex flex-col  h-fit   w-[95%] md:w-[65%] xl:2/3 2xl:w-[40%]  py-2 "></div>
      </main>
    </>
  );
}
