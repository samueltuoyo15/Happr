import axios from "@/lib";
import type { Supporter } from "../types";

const getSupporters = async (
  creatorId: string,
  limit?: number
): Promise<Supporter[]> => {
  console.log(creatorId);

  try {
    const res = await axios.get<{ supporters: Supporter[] }>(
      "/supporters.json"
    );

    const supporters = res.supporters;
    return limit ? supporters.slice(0, limit) : supporters;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("An unknown error occurred");
  }
};

export default getSupporters;
