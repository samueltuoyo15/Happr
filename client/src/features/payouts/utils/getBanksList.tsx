import { axios } from "@/lib";
import type { Bank, PaystackBank } from "../types";

const getBanksList = async (): Promise<Bank[]> => {
  const res = await axios.get("https://api.paystack.co/bank?country=nigeria");

  return res.data
    .filter((bank: PaystackBank) => bank.active && bank.currency !== "USD")
    .map((bank: Bank) => ({
      id: bank.id,
      name: bank.name,
      code: bank.code,
      longcode: bank.longcode
    }));
};

export default getBanksList;
