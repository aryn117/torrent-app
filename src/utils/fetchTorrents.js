// Next.js API route support: https://nextjs.org/docs/api-routes/introduction // fetches torrnets
import { sortArray } from "@/utils/utils";

export default async function fetchTorrentsHandler(
  [setLoading, setData, setError, queryString, pageNumber],
  res
) {
  console.log("🚀 ~ file: fetchTorrents.js:8 ~ setLoading, queryString, pageNumber:", setLoading, queryString, pageNumber)

  if (queryString === "") return;

  setLoading(true);

  try {
    const [res_1337x, res_rarbg, res_pirateBay] = await Promise.allSettled([
      fetch(
        `https://torrent-scrape-server.cyclic.app/torrent/1337x/search/${queryString}/${pageNumber}`
      ),
      fetch(
        `https://torrent-scrape-server.cyclic.app/torrent/rarbg/search/${queryString}/${pageNumber}`
      ),
      fetch(
        `https://torrent-scrape-server.cyclic.app/torrent/piratebay/search/${queryString}/${pageNumber}`
      ),
    ]);

    console.log(res_1337x, res_pirateBay, res_rarbg);

    if (
      res_1337x.value.ok === false &&
      res_pirateBay.value.ok === false &&
      res_rarbg.value.ok === false
    ) {
      throw new Error(
        "Invalid Response Recieved, What you are searching might not be available, Change Your Search value"
      );
    }

    const r = await Promise.allSettled([
      res_1337x.value.json(),
      res_rarbg.value.json(),
      res_pirateBay.value.json(),
    ]);

    const temp = [
      [...r[0].value.result, ...r[1].value.result, ...r[2].value.result],
    ];

    const returnArray = sortArray(temp);
    setData(returnArray);
  } catch (error) {
    console.error(error.message);
    setError(error);
    setLoading(false);
    return;
  }

  setLoading(false);
}
