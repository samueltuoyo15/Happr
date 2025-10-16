import { useState } from "react";

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err;
      } else {
        throw new Erro("Error copying to clipboard");
      }
    }
  };

  return { copy, copied };
};

export default useCopyToClipboard;
