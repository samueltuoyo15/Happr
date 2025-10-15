import { axios } from "@/lib";

const getSupporters = async (creatorId: string) => {
  try {
    const res = await axios.get("/supporters.json");
    return res.supporters;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("An unknown error occurred");
  }
};

export default getSupporters;
