import Image from "next/image";

import seeder_icon from "./../../assets/Seeders.svg";
import leecher_icon from "./../../assets/Leechers.svg";
import download_icon from "./../../assets/File_Icon.svg";
import magnet_icon from "./../../assets/magnet.svg";
import Link from "next/link";


export default function LinkContainer({data}) {

 
  return (
    <div className="flex w-full border-l-8 border-l-[#2ECC71] rounded-lg py-2 mt-2 md:mt-3  md:py-3 px-4 shadow-md bg-[#121212ee] ">
      <div className="flex flex-col w-[85%]">
        <div className="flex text-white text-sm md:text-md ">
         {data.Name}
        </div>
        <div className="flex w-[90%]  md:w-1/2 justify-between">
          {/* Seeders Button */}
          <div className="flex mt-4 text-white justify-center items-center text-md py-1 px-2  text-sm md:font-semibold bg-[#6bf6797b] rounded-md ">
            <span>
              <Image className=" mr-2" src={seeder_icon} alt="seeder icon" />
            </span>
            <span>{data.Seeders}</span>
          </div>
          {/* Leechers Button */}
          <div className="flex mt-4 text-white justify-center items-center text-md py-1 px-2 text-sm md:font-semibold bg-[#fc617db3] rounded-md ">
            <span>
              <Image className=" mr-2" src={leecher_icon} alt="seeder icon" />
            </span>
            <span>{data.Leechers}</span>
          </div>
          {/* Size Button */}
          <div className="flex mt-4 text-white justify-center items-center text-md py-1 px-2 text-sm md:font-semibold bg-[#464646] rounded-md ">
            <span>
              <Image className="mr-2" src={download_icon} alt="seeder icon" />
            </span>
            <span>{data.Size}</span>
          </div>       
        </div>
      </div>
      <div className="flex w-[15%] justify-center items-center bg-[#12121255]">
        <Link href={data.Magnet} className="flex rounded-full bg-black p-3 md:p-4 hover:bg-purple-500 active:scale-95 ease-out duration-200 transition-all ">
            <Image className="shadow-md w-8 md:w-full"  src={magnet_icon} alt="magnet icon" />
        </Link>
      </div>
    </div>
  );
}
