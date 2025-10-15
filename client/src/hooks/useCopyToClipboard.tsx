import { useState } from "react";

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<"string" | null>();

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error copying to clipboard");
      }
    }
  };

  return { copy, copied, error };
};

export default useCopyToClipboard;
