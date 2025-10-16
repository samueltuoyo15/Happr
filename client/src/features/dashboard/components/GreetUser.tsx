import { toast } from "sonner";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

const GreetUser = () => {
  const { copy, copied } = useCopyToClipboard();

  const handleCopy = async (text: string) => {
    try {
      await copy(text);
    } catch (err: unknown) {
      if (err instanceof Error) toast.error(err.message);
    }
  };

  return (
    <section className="w-full flex items-center justify-between">
      <div>
        <p className="font-bold text-md mb-[.1rem]"> Hi, Charmingdc, </p>
        <p className="text-sm"> https://happr.me/Charmingdc </p>
      </div>

      <button
        onClick={() => handleCopy("https://happr.me/Charmingdc")}
        className="bg-card text-card-foreground py-2 px-4 font-bold text-md rounded-full"
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </section>
  );
};
export default GreetUser;
