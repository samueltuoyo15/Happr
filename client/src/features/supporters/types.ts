type Supporter = {
  id: string;
  creatorId: string;
  info: { name: string; xHandle: string | null };
  isAnonymous: boolean;
  smileCount: number;
  smilePrice: number;
  amount: number;
  message: string;
  createdAt: string | Date;
};

export type { Supporter };
