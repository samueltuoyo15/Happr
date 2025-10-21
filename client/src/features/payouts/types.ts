type Bank = {
  id: number;
  name: string;
  code: string;
  longcode: string;
};

type PaystackBank = Bank & { active: boolean; currency: string };

export type { Bank, PaystackBank };
