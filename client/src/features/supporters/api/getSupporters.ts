import { axios } from "@/lib";
import type { Supporter } from "../types";

const getSupporters = async (
  creatorId: string,
  limit?: number
): Promise<Supporter[]> => {
  const res = await axios<{ supporters: Supporter[] }>("/supporters.json");
  const supporters = res.supporters;
  return limit ? supporters.slice(0, limit) : supporters;
};

export default getSupporters;
