import { axios } from "@/lib";
import type { Supporter } from "../types";

const getSupporters = async (
  creatorId: string,
  limit?: number
): Promise<Supporter[]> => {
  console.log(creatorId);

  try {
    const res = await axios.get("/supporters.json");
    if (limit) {
      return res.supporters.slice(0, limit);
    } else {
      return res.supporters;
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("An unknown error occurred");
  }
};

export default getSupporters;
