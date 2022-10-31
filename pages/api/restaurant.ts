import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default async function getApi(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const key = process.env.NEXT_PUBLIC_KEY;
    const city = "thailand";
    const category = "foods";
    const {
      data: { results },
    } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${city}&type=restaurant&key=${key}`
    );

    res.json(results);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
