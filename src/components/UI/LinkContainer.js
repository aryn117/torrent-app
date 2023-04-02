import Image from "next/image";

import seeder_icon from "./../../assets/Seeders.svg";
import leecher_icon from "./../../assets/Leechers.svg";
import download_icon from "./../../assets/File_Icon.svg";
import magnet_icon from "./../../assets/magnet.svg";
import copy_link from "./../../assets/copy_link.svg";

import Link from "next/link";
import { toast } from "react-toastify";

export default function LinkContainer({ data }) {
  const copyMagnetLinkToClipboardHandler = async () => {
    try {
      await navigator.clipboard.writeText(data.Magnet);
      toast.success("Magnet Link Copied to Clipboard");
    } catch (err) {
      toast.error("Failed to Copy Magnet Link" + err);
    }
  };

  return (
    <div className="flex w-full border-l-8 border-l-accent rounded-lg py-2 mt-2 md:mt-3  md:py-3 px-4 shadow-md bg-base-300 ">
      <div className="flex flex-col w-[85%]">
        <div className="flex text-base-content text-sm md:text-md ">
          {data.Name}
        </div>
        <div className="flex w-[90%]  md:w-1/2 justify-between">
          {/* Seeders Button */}
          <div className="tooltip" data-tip="Higher is Better">
            <div className="flex mt-4 text-primary-content justify-center items-center text-md py-1 px-2  text-sm md:font-semibold bg-green-500 rounded-md ">
              <span>
                <Image
                  className=" mr-1 sm:mr-2"
                  src={seeder_icon}
                  alt="seeder icon"
                />
              </span>
              <span>{data.Seeders}</span>
            </div>
          </div>
          {/* Leechers Button */}
          <div className="tooltip" data-tip="Lower is Better">
            <div className="flex mt-4 text-primary-content justify-center items-center  md:text-md py-1 px-2 text-sm md:font-semibold bg-error rounded-md ">
              <span>
                <Image
                  className="mr-1 sm:mr-2"
                  src={leecher_icon}
                  alt="seeder icon"
                />
              </span>
              <span>{data.Leechers}</span>
            </div>
          </div>
          {/* Size Button */}
          <div className="flex mt-4 text-secondary-content justify-center items-center text-md py-1 px-2 text-sm md:font-semibold bg-secondary rounded-md ">
            <span>
              <Image
                className="mr-1 sm:mr-2"
                src={download_icon}
                alt="seeder icon"
              />
            </span>
            <span>{data.Size}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[15%] justify-center items-center ">
        {/* Direct Magnet Link Button **************************************************************************/}
        <div className="tooltip tooltip-neutral" data-tip="Direct Magnet Link">
          <Link href={data.Magnet}>
            <button className=" btn mb-2 md:mb-0 md:mr-4 btn-square btn-neutral  hover:bg-neutral-focus p-2">
              <Image
                className="fit-content"
                src={magnet_icon}
                alt="magnet icon"
              />
            </button>
          </Link>
        </div>

        {/* Copy Magnet Link Button **************************************************************************/}
        <div className="tooltip" data-tip="Copy Link To Clipboard">
          <button
            onClick={copyMagnetLinkToClipboardHandler}
            className=" btn btn-square btn-secondary  hover:bg-secondary-focus p-2"
          >
            <Image className="fit-content" src={copy_link} alt="magnet icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
