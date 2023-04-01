// Next.js API route support: https://nextjs.org/docs/api-routes/introduction // fetches torrnets
import { sortArray } from "@/utils/utils";
import { toast } from "react-toastify";

export default async function fetchTorrentsHandler(
  [setLoading, setData, setError, queryString, pageNumber],
  res
) {

// if the query string is empty, throw an error
  if (queryString === "") {
    toast.error("Please Enter a Search Query");
    return;
  }

  setLoading(true);

  try {
    const [res_1337x, res_rarbg, res_pirateBay] = await Promise.allSettled([
      fetch(
        `https://better-gilet-bear.cyclic.app/torrent/1337x/search/${queryString}/${pageNumber}`
      ),
      fetch(
        `https://better-gilet-bear.cyclic.app/torrent/rarbg/search/${queryString}/${pageNumber}`
      ),
      fetch(
        `https://better-gilet-bear.cyclic.app/torrent/piratebay/search/${queryString}/${pageNumber}`
      ),
    ]);

 
// if all the promises are rejected, throw an error
    if (
      res_1337x.value.ok === false &&
      res_pirateBay.value.ok === false &&
      res_rarbg.value.ok === false
    ) {
      console.log("%c ⛔Error: 404, Probably Couldn't find any Search Results", "color:lightcoral; font-size:16px");
      const rx = await res_1337x.value.json();
      throw new Error(`${rx.code}: ${rx.errorMessage}`);
    }

    const r = await Promise.allSettled([
      res_1337x.value.json(),
      res_rarbg.value.json(),
      res_pirateBay.value.json(),
    ]);

    // sorting the array acc. to seeds
    const temp = [
      [...r[0].value.result, ...r[1].value.result, ...r[2].value.result],
    ];

    const returnArray = sortArray(temp);
    setData(returnArray);
  } catch (error) {
    console.error(error.message);
    setError(error);
    toast.error("Error: " + error.message);
    setLoading(false);
    return;
  }

  setLoading(false);
}
